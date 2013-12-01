angular.module('techRadarApp').factory('radarService', ['$log', '$timeout', 'localStorageWatcher',
  function($log, $timeout, localStorageWatcher) {

    var LOCAL_STORAGE_ID = 'techradar.technologyRadarData';

    function Radar(data) {
      this.data = data ? data : [
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
    }

    Radar.prototype.getTechnologies = function() {
      var categories = _.pluck(this.data, 'categories');
      return _.flatten(_.pluck(_.flatten(categories), 'technologies'));
    };

    var defaultData = [
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
    ];

    var radarData = localStorageWatcher.syncWithLocalStorage(LOCAL_STORAGE_ID, defaultData);

    var radar = new Radar(radarData);

    function getCategories() {
      var categories = _.pluck(radar.data, 'categories');
      return _.pluck(categories, 'label');
    }

    function getStatuses() {
      return _.pluck(radar.data, 'label');
    }

    return { radar: radar, categories: getCategories(), statuses: getStatuses() };
  }]);