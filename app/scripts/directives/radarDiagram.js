'use strict';

angular.module('techRadarApp').directive('radarDiagram', [function(){
  return {
    restrict: 'E',
    templateUrl: 'views/radar.html',
    replace: true,
    link: function(scope, element, attrs) {
      var dataA = {
        categories: ['Tools', 'Platforms', 'Languages & Frameworks', 'Techniques'],
        rings:      ['Adopt', 'Trial', 'Assess', 'Hold'],
        technologies: [
          {label: "Health check pages", category: "Techniques", ring: "Adopt"},
          {label: "Windows infrastructure automation", category: "Techniques", ring: "Adopt"},
          {label: "Guerrilla user testing", category: "Techniques", ring: "Adopt"},
          {label: "Work-in-Progress limits", category: "Techniques", ring: "Adopt"},
          {label: "Automated deployment pipeline", category: "Techniques", ring: "Adopt"},
          {label: "In process acceptance testing", category: "Techniques", ring: "Adopt"},
          {label: "Advanced analytics", category: "Techniques", ring: "Adopt"},
          {label: "Aggregates as documents", category: "Techniques", ring: "Adopt"},
          {label: "Polyglot Persistence", category: "Techniques", ring: "Trial"},
          {label: "Performance testing as a first-class citizen", category: "Techniques", ring: "Trial"},
          {label: "Out-of-container functional testing", category: "Techniques", ring: "Trial"},
          {label: "Micro-services", category: "Techniques", ring: "Trial"},
          {label: "Infrastructure automation of development workstations", category: "Techniques", ring: "Trial"},
          {label: "Agile analytics", category: "Techniques", ring: "Trial"},
          {label: "Logs as data", category: "Techniques", ring: "Trial"},
          {label: "Responsive web design", category: "Techniques", ring: "Trial"},
          {label: "Mobile first", category: "Techniques", ring: "Trial"},
          {label: "Declarative provisioning", category: "Techniques", ring: "Trial"},
          {label: "Remote usability testing", category: "Techniques", ring: "Trial"},
          {label: "Semantic monitoring", category: "Techniques", ring: "Trial"},
          {label: "Edge Side Includes for page composition", category: "Techniques", ring: "Trial"},
          {label: "Configuration in DNS", category: "Techniques", ring: "Trial"},
          {label: "Deployment and scripting test tools", category: "Techniques", ring: "Assess"},
          {label: "Database based integration", category: "Techniques", ring: "Hold"},
          {label: "Feature branching", category: "Techniques", ring: "Hold"},
          {label: "Test recorders", category: "Techniques", ring: "Hold"},
          {label: "Exhaustive browser-based testing", category: "Techniques", ring: "Hold"},
          {label: "Infrastructure as code", category: "Tools", ring: "Adopt"},
          {label: "Embedded servlet containers", category: "Tools", ring: "Adopt"},
          {label: "Silverback", category: "Tools", ring: "Adopt"},
          {label: "AppCode", category: "Tools", ring: "Adopt"},
          {label: "Jasmine paired with Node.js", category: "Tools", ring: "Adopt"},
          {label: "Immutable servers", category: "Tools", ring: "Adopt"},
          {label: "Graphite", category: "Tools", ring: "Adopt"},
          {label: "Vagrant", category: "Tools", ring: "Trial"},
          {label: "Gradle", category: "Tools", ring: "Trial"},
          {label: "PSake", category: "Tools", ring: "Trial"},
          {label: "Frank", category: "Tools", ring: "Trial"},
          {label: "JavaScript micro frameworks", category: "Tools", ring: "Trial"},
          {label: "Jade", category: "Tools", ring: "Trial"},
          {label: "NuGet", category: "Tools", ring: "Trial"},
          {label: "Highcharts", category: "Tools", ring: "Trial"},
          {label: "D3", category: "Tools", ring: "Trial"},
          {label: "Apache Pig", category: "Tools", ring: "Trial"},
          {label: "SaaS performance testing tools", category: "Tools", ring: "Trial"},
          {label: "Dependency Structure Matrices", category: "Tools", ring: "Trial"},
          {label: "Locust", category: "Tools", ring: "Trial"},
          {label: "Rake for Java & .Net", category: "Tools", ring: "Trial"},
          {label: "Logic-free markup", category: "Tools", ring: "Assess"},
          {label: "Crazy Egg", category: "Tools", ring: "Assess"},
          {label: "Zipkin", category: "Tools", ring: "Assess"},
          {label: "Zucchini", category: "Tools", ring: "Assess"},
          {label: "GemJars", category: "Tools", ring: "Assess"},
          {label: "Light Table", category: "Tools", ring: "Assess"},
          {label: "Riemann", category: "Tools", ring: "Assess"},
          {label: "Enterprise service bus", category: "Tools", ring: "Hold"},
          {label: "VCS with implicit workflow", category: "Tools", ring: "Hold"},
          {label: "Maven", category: "Tools", ring: "Hold"},
          {label: "Clojure", category: "Languages & Frameworks", ring: "Adopt"},
          {label: "Scala", category: "Languages & Frameworks", ring: "Adopt"},
          {label: "Care about languages", category: "Languages & Frameworks", ring: "Adopt"},
          {label: "SASS, SCSS, LESS, and Stylus", category: "Languages & Frameworks", ring: "Adopt"},
          {label: "Domain-Specific Languages", category: "Languages & Frameworks", ring: "Trial"},
          {label: "Scratch, Alice, and Kodu", category: "Languages & Frameworks", ring: "Trial"},
          {label: "Twitter Bootstrap", category: "Languages & Frameworks", ring: "Trial"},
          {label: "Sinatra", category: "Languages & Frameworks", ring: "Trial"},
          {label: "AngularJS and Knockout", category: "Languages & Frameworks", ring: "Trial"},
          {label: "Require.js", category: "Languages & Frameworks", ring: "Trial"},
          {label: "Dropwizard", category: "Languages & Frameworks", ring: "Trial"},
          {label: "Jekyll", category: "Languages & Frameworks", ring: "Trial"},
          {label: "HTML5 for offline applications", category: "Languages & Frameworks", ring: "Trial"},
          {label: "F#", category: "Languages & Frameworks", ring: "Assess"},
          {label: "ClojureScript", category: "Languages & Frameworks", ring: "Assess"},
          {label: "Lua", category: "Languages & Frameworks", ring: "Assess"},
          {label: "RubyMotion", category: "Languages & Frameworks", ring: "Assess"},
          {label: "Gremlin", category: "Languages & Frameworks", ring: "Assess"},
          {label: "JavaScript as a platform", category: "Languages & Frameworks", ring: "Assess"},
          {label: "Backbone.js", category: "Languages & Frameworks", ring: "Hold"},
          {label: "Logic in stored procedures", category: "Languages & Frameworks", ring: "Hold"},
          {label: "Google Dart", category: "Languages & Frameworks", ring: "Hold"},
          {label: "Component-based frameworks", category: "Languages & Frameworks", ring: "Hold"},
          {label: "ATOM", category: "Platforms", ring: "Adopt"},
          {label: "Care about hardware", category: "Platforms", ring: "Adopt"},
          {label: "Mobile payment systems", category: "Platforms", ring: "Adopt"},
          {label: "Neo4J", category: "Platforms", ring: "Adopt"},
          {label: "Node.js", category: "Platforms", ring: "Trial"},
          {label: "Riak", category: "Platforms", ring: "Trial"},
          {label: "Domain-specific PaaS", category: "Platforms", ring: "Trial"},
          {label: "Linux containers", category: "Platforms", ring: "Trial"},
          {label: "Private clouds", category: "Platforms", ring: "Trial"},
          {label: "Hybrid clouds", category: "Platforms", ring: "Trial"},
          {label: "MongoDB", category: "Platforms", ring: "Trial"},
          {label: "Continuous integration in the cloud", category: "Platforms", ring: "Trial"},
          {label: "Couchbase", category: "Platforms", ring: "Trial"},
          {label: "Single threaded servers with asynchronous I/O", category: "Platforms", ring: "Trial"},
          {label: "Calatrava", category: "Platforms", ring: "Assess"},
          {label: "Datomic", category: "Platforms", ring: "Assess"},
          {label: "Vert.x", category: "Platforms", ring: "Assess"},
          {label: "Azure", category: "Platforms", ring: "Assess"},
          {label: "Open source IaaS", category: "Platforms", ring: "Assess"},
          {label: "BigQuery", category: "Platforms", ring: "Assess"},
          {label: "Windows Phone", category: "Platforms", ring: "Assess"},
          {label: "WS-*", category: "Platforms", ring: "Hold"},
          {label: "Java portal servers", category: "Platforms", ring: "Hold"},
          {label: "Zero-code packages", category: "Platforms", ring: "Hold"},
          {label: "Singleton infrastructure", category: "Platforms", ring: "Hold"},
          {label: "Meteor.js", category: "Platforms", ring: "Hold"},
        ]};

      function Radar(data) {
        this.data = data;
      }

      Radar.prototype.getTechnologies = function() {
        var categories = _.pluck(this.data, 'categories');
        return _.flatten(_.pluck(_.flatten(categories), 'technologies'));
      };

      var newData = [
        {
          label: "Adopt",
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: "Trial",
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: "Assess",
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        },
        {
          label: "Hold",
          categories: [
            { label: 'Tools', technologies: []},
            { label: 'Techniques', technologies: []},
            { label: 'Platforms', technologies: []},
            { label: 'Languages & Frameworks', technologies: []},
          ]
        }
      ];

      _.each(dataA.technologies, function(data) {
        var ring = _.findWhere(newData, {label: data.ring});
        var slice = _.findWhere(ring.categories, {label: data.category});
        slice.technologies.push({label: data.label});
      });

      //console.log(JSON.stringify(newData));

      var radar = new Radar([
        {"label": "Adopt", "categories": [
          {"label": "Tools", "technologies": [
            {"label": "Infrastructure as code"},
            {"label": "Embedded servlet containers"},
            {"label": "Silverback"},
            {"label": "AppCode"},
            {"label": "Jasmine paired with Node.js"},
            {"label": "Immutable servers"},
            {"label": "Graphite"}
          ]},
          {"label": "Techniques", "technologies": [
            {"label": "Health check pages"},
            {"label": "Windows infrastructure automation"},
            {"label": "Guerrilla user testing"},
            {"label": "Work-in-Progress limits"},
            {"label": "Automated deployment pipeline"},
            {"label": "In process acceptance testing"},
            {"label": "Advanced analytics"},
            {"label": "Aggregates as documents"}
          ]},
          {"label": "Platforms", "technologies": [
            {"label": "ATOM"},
            {"label": "Care about hardware"},
            {"label": "Mobile payment systems"},
            {"label": "Neo4J"}
          ]},
          {"label": "Languages & Frameworks", "technologies": [
            {"label": "Clojure"},
            {"label": "Scala"},
            {"label": "Care about languages"},
            {"label": "SASS, SCSS, LESS, and Stylus"}
          ]}
        ]},
        {"label": "Trial", "categories": [
          {"label": "Tools", "technologies": [
            {"label": "Vagrant"},
            {"label": "Gradle"},
            {"label": "PSake"},
            {"label": "Frank"},
            {"label": "JavaScript micro frameworks"},
            {"label": "Jade"},
            {"label": "NuGet"},
            {"label": "Highcharts"},
            {"label": "D3"},
            {"label": "Apache Pig"},
            {"label": "SaaS performance testing tools"},
            {"label": "Dependency Structure Matrices"},
            {"label": "Locust"},
            {"label": "Rake for Java & .Net"}
          ]},
          {"label": "Techniques", "technologies": [
            {"label": "Polyglot Persistence"},
            {"label": "Performance testing as a first-class citizen"},
            {"label": "Out-of-container functional testing"},
            {"label": "Micro-services"},
            {"label": "Infrastructure automation of development workstations"},
            {"label": "Agile analytics"},
            {"label": "Logs as data"},
            {"label": "Responsive web design"},
            {"label": "Mobile first"},
            {"label": "Declarative provisioning"},
            {"label": "Remote usability testing"},
            {"label": "Semantic monitoring"},
            {"label": "Edge Side Includes for page composition"},
            {"label": "Configuration in DNS"}
          ]},
          {"label": "Platforms", "technologies": [
            {"label": "Node.js"},
            {"label": "Riak"},
            {"label": "Domain-specific PaaS"},
            {"label": "Linux containers"},
            {"label": "Private clouds"},
            {"label": "Hybrid clouds"},
            {"label": "MongoDB"},
            {"label": "Continuous integration in the cloud"},
            {"label": "Couchbase"},
            {"label": "Single threaded servers with asynchronous I/O"}
          ]},
          {"label": "Languages & Frameworks", "technologies": [
            {"label": "Domain-Specific Languages"},
            {"label": "Scratch, Alice, and Kodu"},
            {"label": "Twitter Bootstrap"},
            {"label": "Sinatra"},
            {"label": "AngularJS and Knockout"},
            {"label": "Require.js"},
            {"label": "Dropwizard"},
            {"label": "Jekyll"},
            {"label": "HTML5 for offline applications"}
          ]}
        ]},
        {"label": "Assess", "categories": [
          {"label": "Tools", "technologies": [
            {"label": "Logic-free markup"},
            {"label": "Crazy Egg"},
            {"label": "Zipkin"},
            {"label": "Zucchini"},
            {"label": "GemJars"},
            {"label": "Light Table"},
            {"label": "Riemann"}
          ]},
          {"label": "Techniques", "technologies": [
            {"label": "Deployment and scripting test tools"}
          ]},
          {"label": "Platforms", "technologies": [
            {"label": "Calatrava"},
            {"label": "Datomic"},
            {"label": "Vert.x"},
            {"label": "Azure"},
            {"label": "Open source IaaS"},
            {"label": "BigQuery"},
            {"label": "Windows Phone"}
          ]},
          {"label": "Languages & Frameworks", "technologies": [
            {"label": "F#"},
            {"label": "ClojureScript"},
            {"label": "Lua"},
            {"label": "RubyMotion"},
            {"label": "Gremlin"},
            {"label": "JavaScript as a platform"}
          ]}
        ]},
        {"label": "Hold", "categories": [
          {"label": "Tools", "technologies": [
            {"label": "Enterprise service bus"},
            {"label": "VCS with implicit workflow"},
            {"label": "Maven"}
          ]},
          {"label": "Techniques", "technologies": [
            {"label": "Database based integration"},
            {"label": "Feature branching"},
            {"label": "Test recorders"},
            {"label": "Exhaustive browser-based testing"}
          ]},
          {"label": "Platforms", "technologies": [
            {"label": "WS-*"},
            {"label": "Java portal servers"},
            {"label": "Zero-code packages"},
            {"label": "Singleton infrastructure"},
            {"label": "Meteor.js"}
          ]},
          {"label": "Languages & Frameworks", "technologies": [
            {"label": "Backbone.js"},
            {"label": "Logic in stored procedures"},
            {"label": "Google Dart"},
            {"label": "Component-based frameworks"}
          ]}
        ]}
      ]);

      var numCategories = dataA.categories.length, equalPortions = [];
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
        console.log(xThreshold, yThreshold);

        var foundOne = false;
        _.each(radar.getTechnologies(), function(p) {
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

      var rings = svgArcs.selectAll("g").data(radar.data).enter().append("g").attr("class", "ring");
      var slices = rings.selectAll("path")
        .data(function(d) { return d.categories; })
        .enter()
        .append("g")
        .attr("class", "slice");
      slices.append("path")
        .attr("fill", function(d, i) { return color(i); })
        .datum(function(d, i, j){
          d.arc = { innerRadius: getInnerRadius(diagramRadius, _.size(dataA.rings), j),
            outerRadius: j == _.size(dataA.rings) - 1 ? diagramRadius : getInnerRadius(diagramRadius, _.size(dataA.rings), j + 1)};
          _.extend(d.arc, categoryArcs[d.label]);
          return d;
        })
        .attr("d", function(d) {
          return arc.innerRadius(d.arc.innerRadius).outerRadius(d.arc.outerRadius)(d.arc); /* draw this slice of the ring */
        });

      var techRoot = svgNodes.selectAll("g").data(radar.data).enter().append("g").attr("class", "tech");
      var techCategories = techRoot.selectAll("path")
        .data(function(d) { return d.categories; })
        .enter()
        .append("g")
        .attr("class", "category");

      var technologies = techCategories.selectAll("circle")
        .data(function(d) {
          return d.technologies;});

      var techGroup = technologies.enter().append("g").attr("class", "tech-label");

      console.log(techGroup);


      techGroup.append("text")
        .datum(function(d) {
          var parentData = d3.select(this.parentNode.parentNode).datum();
          do {
            applyRandomXY(parentData.arc, d);
          } while(isOverlappingAnotherPoint(d));

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

        //.selectAll("circle")

      //.on('click', function(d, i){console.log(d,i);});
      //slices.selectAll("path").data(function(d) {console.log(d); return d;})

    }
  }
}]);