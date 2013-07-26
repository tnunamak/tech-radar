'use strict';

angular.module('techRadarApp').directive('radarDiagram', [ 'radarService', function(radarService){
  return {
    restrict: 'E',
    templateUrl: 'views/radar.html',
    replace: true,
    link: function(scope, element, attrs) {

      var numCategories = radarService.categories.length, equalPortions = [];
      _(numCategories).times(function(){ equalPortions.push(100/numCategories) });


      var width = attrs.width,
        height = attrs.height,
        padding = 30,
        diagramRadius = Math.min(attrs.width, attrs.height)/2 - padding;

      var color = d3.scale.category20();

      var pie = d3.layout.pie()
        .sort(null);

      var categoryPie = pie(equalPortions);
      var categoryArcs = {
        "Tools": categoryPie[0],
        "Techniques": categoryPie[1],
        "Platforms": categoryPie[2],
        "Languages & Frameworks": categoryPie[3]
      };

      var arc = d3.svg.arc();

      var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);
      var svgArcs = svg.append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      var svgNodes = svg.append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      /**
       *  radiusSoftener should be close to 1
       */
      function getInnerRadius(outermostRadius, numRings, ringIndex) {
        var radiusSoftener = 1;

        var totalArea = Math.PI * Math.pow(outermostRadius, 2);
        var ringArea = totalArea / numRings;

        function innerRadiusHelper(outerRadius, area) {
          var squared = (Math.PI * Math.pow(outerRadius, 2) * Math.pow(radiusSoftener, 2) - area) / Math.PI;
          return squared > 0 ? Math.sqrt(squared) : 0;
        }

        var currentRing = numRings - 1;
        var currentOuterRadius = outermostRadius;
        while(currentRing-- > ringIndex) {
          currentOuterRadius = innerRadiusHelper(currentOuterRadius, ringArea);
        }

        return Math.max(0, innerRadiusHelper(currentOuterRadius, ringArea));
      }

      function isOverlappingAnotherPoint(o) {
        function distance(a, b) {
          return Math.sqrt(Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2));
        }

        /* If two nodes are within a box of xThreshold-by-yThreshold dimensions, reject this placement */
        /* This should scale with the diagramRadius */
        var xThreshold = .15 * diagramRadius;
        var yThreshold = .04 * diagramRadius;

        var foundOne = false;
        _.each(radarService.radar.getTechnologies(), function(p) {
          if(o !== p && o.x && o.y && p.x && p.y) {
            if(Math.abs(o.x - p.x) < xThreshold &&  Math.abs(o.y - p.y) < yThreshold) {
              //distance(o, p) < threshold) {
              foundOne = true;
            }
          }
        });
        return foundOne;
      }

      var defaultTechRadius = 5;
      var hoverTechRadius = 10;
      var arcBuffer = 10;

      function applyRandomXY(arc, d) {
        inner = arc.innerRadius + arcBuffer;
        outer = arc.outerRadius - arcBuffer;
        var r = (Math.random()*(outer - inner)) + inner;

        var radialBuffer = r * Math.tan((Math.PI/2)*.05);

        var inner = arc.startAngle + radialBuffer;
        var outer = arc.endAngle - radialBuffer;
        var theta = (Math.random()*(outer - inner)) + inner;

        d.x = r * Math.cos(theta-(Math.PI/2));
        d.y = r * Math.sin(theta-(Math.PI/2));
      }

      var rings = svgArcs.selectAll("g").data(radarService.radar.data).enter().append("g").attr("class", "ring");
      var slices = rings.selectAll("path")
        .data(function(d) { return d.categories; })
        .enter()
        .append("g")
        .attr("class", "slice");
      slices.append("path")
        .attr("fill", function(d, i) { return color(i); })
        .datum(function(d, i, j){
          var numRings = _.size(radarService.statuses);
          d.arc = { innerRadius: getInnerRadius(diagramRadius, numRings, j),
            outerRadius: j == numRings - 1 ? diagramRadius : getInnerRadius(diagramRadius, numRings, j + 1)};
          _.extend(d.arc, categoryArcs[d.label]);
          return d;
        })
        .attr("d", function(d) {
          return arc.innerRadius(d.arc.innerRadius).outerRadius(d.arc.outerRadius)(d.arc); /* draw this slice of the ring */
        });

      var techRoot = svgNodes.selectAll("g").data(radarService.radar.data).enter().append("g").attr("class", "tech");
      var techCategories = techRoot.selectAll("path")
        .data(function(d) { return d.categories; })
        .enter()
        .append("g")
        .attr("class", "category");

      var technologies = techCategories.selectAll("circle")
        .data(function(d) {
          return d.technologies;});

      var techGroup = technologies.enter().append("g").attr("class", "tech-label");

      techGroup.append("text")
        .datum(function(d) {
          var parentData = d3.select(this.parentNode.parentNode).datum();
          while(!d.x || !d.y || isOverlappingAnotherPoint(d)) {
            applyRandomXY(parentData.arc, d);
          }

          return d;
        })
        .text(function(d) { return d.label.substring(0,9)+"...";})
        .attr("x", function(d) {return d.x + defaultTechRadius + 5;})
        .attr("y", function(d) {return d.y + 3.5;});

      techGroup.append("circle").attr("r", defaultTechRadius)
        .on('mouseover', function(d) { d.radius = hoverTechRadius; redraw(); })
        .on('mouseout', function(d) { d.radius = defaultTechRadius; redraw(); })
        .style("stroke", "white")
        .attr("cx", function(d) {
          return d.x;
        }).attr("cy", function(d) {
          return d.y;
        });

      function redraw() {
        technologies.selectAll("circle").transition()
          .duration(500)
          .attr("r", function(d) {return d.radius? d.radius : defaultTechRadius; });
      }

      //.on('click', function(d, i){console.log(d,i);});
      //slices.selectAll("path").data(function(d) {console.log(d); return d;})

    }
  }
}]);