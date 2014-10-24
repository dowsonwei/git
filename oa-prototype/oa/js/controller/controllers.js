var NewApp = angular.module('NewApp', [], function(){console.log('started')});

NewApp.controller('newListController',function($scope){
 /*  $http.get('phones/phones.json').success(function(data) {
    $scope.news = data;
   });*/
   $scope.news = [
		{"newsTitle":"小撞车,猫失踪",
		 "publishTime":"2014-08-20",
		 "newsType":"公告",
		 "newsContent":"123131."
		 },
		{"newsTitle":"猫失踪",
		 "publishTime":"2014-08-13",
		 "newsType":"公告",
		 "newsContent":"一天下午,小猫与吉普车撞车失踪了吖.主任很伤心,伤心死啦."
		 },
		 {"newsTitle":"小撞车",
		 "publishTime":"2014-08-19",
		 "newsType":"新闻",
		 "newsContent":"一天下午,小猫与吉普车撞车失踪了吖.主任很伤心,伤心死啦."
		 }];
});

//自定义指令
NewApp.directive('fraction',function(){
    return {
        link : function(scope, elements, attrs, controller){
            elements[0].onkeyup = function(){
                if(isNaN(this.value) || this.value<1 || this.value>10){
                    this.style.borderColor = 'red';
                }
                else{
                    this.style.borderColor = '';
                }
            };
        }
    };
});

