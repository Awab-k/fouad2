'use strict';

// Prepare the 'users' module for subsequent registration of controllers and delegates
var app = angular.module('myApp', [ 'ngMaterial' , 'ngRoute' , 'ui.router' , 'ngAnimate' ])

.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('teal') 
})



.config(function($stateProvider , $urlRouterProvider){
  $stateProvider
  .state("site" , {
    url:"/site",
    templateUrl: 'src/templates/site.html',
    controller: 'mainCtrl'
  })
  .state("login" , {
    url:"/login",
    templateUrl: 'src/views/login.html',
    controller: 'LoginCtrl'
  })
  .state("site.home" , {
    url:"/home",
    templateUrl: 'src/views/home.html',
    controller: 'HomeCtrl'
  })
   .state("site.quizzing" , {
    url:"/quizzing",
    templateUrl: 'src/views/quizzing.html',
    controller: 'QuizzingCtrl'
  })
    .state("site.survey" , {
    url:"/survey",
    templateUrl: 'src/views/survey.html',
    controller: 'SurveyCtrl'
  });

  $urlRouterProvider.otherwise("/login");
});

app.controller('SurveyCtrl', ['$scope',
  function ($scope) {
   $scope.buy=false;
   $scope.rent=false;
   $scope.investment=false;
   $scope.finance=false;
   $scope.buyAviable=false;
   $scope.buyNotAviable=false;
   $scope.buySame=false;
   $scope.buyNotSame=false;
   $scope.rentOwnership=false;
   $scope.rentNotOwnership=false;
   $scope.investmentParticipation=false;
   $scope.investmentNotParticipation=false;
   $scope.investmentSpecific=false;
   $scope.investmentNotSpecific=false;
   $scope.investmentOwn=false;
   $scope.investmentNotOwn=false;
   $scope.financeParticipation=false;
   $scope.financeNotParticipation=false;
   $scope.financeOwn=false;
   $scope.financeNotOwn=false;


function makeAllFalse(){
   $scope.buy=false;
   $scope.rent=false;
   $scope.investment=false;
   $scope.finance=false;
   $scope.buyAviable=false;
   $scope.buyNotAviable=false;
   $scope.buySame=false;
   $scope.buyNotSame=false;
   $scope.rentOwnership=false;
   $scope.rentNotOwnership=false;
   $scope.investmentParticipation=false;
   $scope.investmentNotParticipation=false;
   $scope.investmentSpecific=false;
   $scope.investmentNotSpecific=false;
   $scope.investmentOwn=false;
   $scope.investmentNotOwn=false;
   $scope.financeParticipation=false;
   $scope.financeNotParticipation=false;
   $scope.financeOwn=false;
   $scope.financeNotOwn=false; 
};



 $scope.restartAll = function (){
 makeAllFalse();
};





$scope.setBuy = function (){
 makeAllFalse();
  $scope.buy=true;
};

$scope.setRent = function (){
 makeAllFalse();
  $scope.rent=true;
};

$scope.setInvestment = function (){
 makeAllFalse();
  $scope.investment=true;
};

$scope.setFinance = function (){
 makeAllFalse();
  $scope.finance=true;
};









$scope.setBuyAviable = function (){
$scope.buyAviable=true;
};

$scope.setbuyNotAviable = function (){
$scope.buyNotAviable=true;
};

$scope.setBuySame = function (){
$scope.buySame=true;
};

$scope.setBuyNotSame = function (){
$scope.buyNotSame=true;
};

$scope.setRentOwnership = function (){
$scope.rentOwnership=true;
};

$scope.setRentNotOwnership = function (){
$scope.rentNotOwnership=true;
};

 $scope.setInvestmentParticipation = function (){
$scope.investmentParticipation=true;
};

$scope.setInvestmentNotParticipation = function (){
$scope.investmentNotParticipation=true;
};

$scope.setInvestmentSpecific = function (){
$scope.investmentSpecific=true;
};

$scope.setInvestmentNotSpecific = function (){
$scope.investmentNotSpecific=true;
}; 

$scope.setInvestmentOwn = function (){
$scope.investmentOwn=true;
}; 

$scope.setInvestmentNotOwn = function (){
$scope.investmentNotOwn=true;
}; 

 $scope.setFinanceParticipation = function (){
$scope.financeParticipation=true;
};

$scope.setFinanceNotParticipation = function (){
$scope.financeNotParticipation=true;
};

$scope.setFinanceOwn = function (){
$scope.financeOwn=true;
}; 

$scope.setFinanceNotOwn = function (){
$scope.financeNotOwn=true;
}; 



 }]);







app.controller('QuizzingCtrl', ['$scope',
  function ($scope) {
    $scope.nums = [1,2,3,4,5,6,7,8,9,10];
    $scope.tempquestitle="kjjdsfkj hkdskjdskjdsf jdskddsjfhksjdhfhsdkfkjhsdfhkhsd fhd sfjkhsdjhfjkhdsjfhjksdhfjkhdsjkfhjksdhfjkhdsjkf sdhfjkhsdjkfhjksdhf sdjkfhjksdhfkjhsdjkfhjksdhf jksdhfjkhdsjkfhjkhdsfjkhsdjkfhsdf hkdjshfkjsdfjhsdjkfh ";
  }]);

app.controller('LoginCtrl', ['$scope', '$state' ,
  function ($scope , $state ) {

    $scope.login = function (username , password){
$scope.wrongPass ="";
      if(username == 'awab' && password == '123' )
      {
      $state.go('site.home') ;
      }else{
$scope.wrongPass = "authentication faild   try 'awab' for username and '123' for password " 
      }
    };


  }]);





app.controller('mainCtrl', ['$scope','$timeout', '$mdSidenav', '$log' , function($scope , $timeout , $mdSidenav , $log) {
    
    $scope.toggleLeft = buildDelayedToggler('left');

 function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
  }]);




app.controller('HomeCtrl', ['$scope',
  function ($scope ) {
    $scope.currentExams = [
    {
      title: 'exam1',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam1.jpg',
      class: 'first',
      section: 'section 1'
    },
    {
      title: 'exam2',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam2.jpg',
      class: 'first',
      section: 'section 2'
    },
    {
      title: 'exam3',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam3.jpg',
      class: 'first',
      section: 'section 3'
    },
    {
      title: 'exam4',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam4.png',
      class: 'seccond',
      section: 'section 1'
    },
    {
      title: 'exam5',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam5.png',
      class: 'seccond',
      section: 'section 2'
    },
    {
      title: 'exam6',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam6.jpg',
      class: 'third',
      section: 'section 1'
    }

    ];


    $scope.oldExams = [
    {
      title: 'exam3',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam3.jpg',
      class: 'first',
      section: 'section 3'
    },
    {
      title: 'exam4',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam4.png',
      class: 'seccond',
      section: 'section 1'
    },
    {
      title: 'exam5',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam5.png',
      class: 'seccond',
      section: 'section 2'
    },
    {
      title: 'exam1',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam1.jpg',
      class: 'first',
      section: 'section 1'
    },
    {
      title: 'exam2',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam2.jpg',
      class: 'first',
      section: 'section 2'
    },

    {
      title: 'exam6',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam6.jpg',
      class: 'third',
      section: 'section 1'
    },
    {
      title: 'exam4',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam4.png',
      class: 'seccond',
      section: 'section 1'
    },
    {
      title: 'exam5',
      description: "this is the exam description 123 ",
      imgPath: '../../assets/images/exam5.png',
      class: 'seccond',
      section: 'section 2'
    }

    ];
  }]);