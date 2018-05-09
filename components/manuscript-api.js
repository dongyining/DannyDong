/**
 * 作品原稿API
 */
var ManuscriptApi = function(){
	var getWorksManuscript = function(projectId){
		var result = ManuscriptAjax.getWorksManuscript(projectId);
		return result;
	};
	
	var show = function(projectId){
		var result = ManuscriptAjax.show(projectId);
		return result;
	};
	
	var deleteWorksManuscript = function(projectId){
		var result = ManuscriptAjax.deleteWorksManuscript(projectId);
		return result;
	};
	
	var getProjectInfo = function(projectId){
		var result = ManuscriptAjax.getProjectInfo(projectId);
		return result;
	};
	
	var getUserInfo = function(userId){
		var userIdArray = [userId];
		var users = ManuscriptAjax.getUserBasicInfo(userIdArray);
		
		var user = users && users.length && users[0];
	    return user;
	};
	
	return {
		getWorksManuscript : function(projectId){
			var result = getWorksManuscript(projectId);
			return result;
		},
		show: function(projectId){
			var result = show(projectId);
			return result;
		},
		deleteWorksManuscript : function(projectId){
			var result = deleteWorksManuscript(projectId);
			return result;			
		},
		getProjectInfo : function(projectId){
			var result = getProjectInfo(projectId);
			return result;
		},
		getUserInfo : function(userId){
			var result = getUserInfo(userId);
			return result;
		}
		
	};
}();

/**
 * 作品原稿AJAX
 */
var ManuscriptAjax = function(){
	var getWorksManuscript = function(projectId){
		var result = {
			success: true, 
			document: {
				id: '1234455',
				extendId: projectId,
				type: 'pdf',
				name: '原稿.doc',
				createTime: '2016年09月03日 16:00:00',
				createUserId:'佚名'
			}
		};
		
        $.ajax({
            url: "/cotrunk/works-manuscript/" + projectId,
            async: false,
            type: "GET",
            dataType: "json",
        }).done(function(data) {
            result = data;
        }).fail(function(data) {
            console.log(data);
        });
		
		return result;
	};
	
	var show = function(projectId){
		var result = {
			success: false, 
			url: null
		};
		
        $.ajax({
            url: "/cotrunk/works-manuscript/" + projectId + "/pdf",
            async: false,
            type: "GET",
            dataType: "json",
        }).done(function(data) {
            result = data;
        }).fail(function(data) {
            console.log(data);
        });
		
		return result;
	};
	
	var deleteWorksManuscript = function(projectId){
		var result = {success: false};
			
        $.ajax({
            url: "/cotrunk/works-manuscript/" + projectId,
            async: false,
            type: "DELETE",
            dataType: "json",
        }).done(function(data) {
            result = data;
        }).fail(function(data) {
            console.log(data);
        });
		
		return result;		
	};
	
	var getProjectInfo = function(projectId){
        $.ajax({
            url: "/cotrunk/project-basic-info/" + projectId,
            async: false,
            type: "GET",
            dataType: "json",
        }).done(function(data) {
            result = data;
        }).fail(function(data) {
            console.log(data);
        });
		
		return result;	
	};
	
   var getUserBasicInfo = function(userIdArray){
	   var result = null;
	   $.ajax({
		   url : "/auth/user-list-basic-info",
		   type : "GET",
		   data : {
			   idList : JSON.stringify(userIdArray)
		   },
		   async : false,
		   qdataType : "json"
	   }).done(function(data) {
		   result = data
	   }).fail(function(data){
	   });
	   return result;
   };
	
	return {
		getWorksManuscript : function(projectId){
			var result = getWorksManuscript(projectId);
			return result;
		},
		show: function(projectId){
			var result = show(projectId);
			return result;
		},
		deleteWorksManuscript : function(projectId){
			var result = deleteWorksManuscript(projectId);
			return result;			
		},
		getProjectInfo : function(projectId){
			var result = getProjectInfo(projectId);
			return result;
		},
		getUserBasicInfo: function(userIdArray){
			var result = getUserBasicInfo(userIdArray);
			return result;
		}
	};
}();