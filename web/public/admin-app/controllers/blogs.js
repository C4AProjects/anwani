app.controller('BlogPageCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
	$scope.items = [
	{
		"id": 1,
		"title": "What is Graphic Design?",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 2,
		"title": "Comparing/creating differences",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 3,
		"title": "Designs in balance",
		"thumb": "data/blogs/v3.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 4,
		"title": "Art of visual communication",
		"thumb": "data/blogs/v4.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 5,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 6,
		"title": "What is Graphic Design?",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 7,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 8,
		"title": "Art of visual communication",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 9,
		"title": "Comparing/creating differences",
		"thumb": "data/blogs/v3.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 10,
		"title": "Designs in balance",
		"thumb": "data/blogs/v4.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 11,
		"title": "What is Graphic Design?",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 12,
		"title": "Human perception and the complex nature",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 13,
		"title": "What is Graphic Design?",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 14,
		"title": "Art of visual communication",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 15,
		"title": "Comparing/creating differences",
		"thumb": "data/blogs/v3.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 16,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blogs/v4.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 17,
		"title": "Designs in balance",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 18,
		"title": "Human perception and the complex nature",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	},	{
		"id": 19,
		"title": "What is Graphic Design?",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 20,
		"title": "Comparing/creating differences",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 21,
		"title": "Designs in balance",
		"thumb": "data/blogs/v3.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 22,
		"title": "Art of visual communication",
		"thumb": "data/blogs/v4.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 23,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 24,
		"title": "What is Graphic Design?",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 25,
		"title": "Keeping a coherent visual pattern",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}, {
		"id": 26,
		"title": "Art of visual communication",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "concept based on human perception and the complex nature of the human senses of weight and proportion. Humans can evaluate these visual elements in several situations to find a sense of balance",
	}, {
		"id": 27,
		"title": "Comparing/creating differences",
		"thumb": "data/blogs/v3.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 28,
		"title": "Designs in balance",
		"thumb": "data/blogs/v4.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "For text, contrast is achieved by mixing serif and sans-serif on the page, by using very different type styles, or by using type in surprising or unusual ways.",
	}, {
		"id": 29,
		"title": "What is Graphic Design?",
		"thumb": "data/blogs/v1.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Designs in balance (or equilibrium) have their parts arrangement planned, keeping a coherent visual pattern (color, shape, space).",
	}, {
		"id": 30,
		"title": "Human perception and the complex nature",
		"thumb": "data/blogs/v2.png",
		"author": "Jason",
		"date": "May 11, 2015",
		"comments": 3,
	      "category":[
	        {"name":"images"},
	        {"name":"web"},
	      ],
		"description": "Distinguishing by comparing/creating differences. Some ways of creating contrast among elements in the design include using contrasting colors, sizes, shapes, locations, or relationships.",
	}
	];
 
	// create empty search model (object) to trigger $watch on update
	$scope.search = {};
 
	$scope.resetFilters = function () {
		// needs to be a function or it won't trigger a $watch
		$scope.search = {};
	};




 
	// pagination controls
	$scope.currentPage = 1;
	$scope.totalItems = $scope.items.length;
	$scope.entryLimit = 8; // items per page
	$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
 	
	// $watch search to update pagination
	$scope.$watch('search', function (newVal, oldVal) {
		$scope.filtered = filterFilter($scope.items, newVal);
		$scope.totalItems = $scope.filtered.length;
		$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		$scope.currentPage = 1;
	}, true);
}]);