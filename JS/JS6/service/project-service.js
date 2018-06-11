angular.module('App')
    .factory('ArticleManagementService', function ($http, pathProject) {
        return {
            //获取
            getArticleList: function (params) {
                return $http.get(pathProject.getArticleList_url, {params: params});
            },
            //新增
            addArticle: function (params) {
                return $http.post(pathProject.addArticle_url, params);
            },
            //删除
            delArticle: function (id) {
                return $http.delete(pathProject.delArticle_url(id));
            },
            //获取单个article数据
            getArticle: function (id) {
                return $http.get(pathProject.getArticle_url(id));
            },
            //编辑
            ediArticle: function (id, params) {
                return $http.put(pathProject.editArticle_url(id), params);
            },
            //修改article上架下架
            changeArticleStatus: function (id, status) {
                return $http.put(pathProject.changeArticleStatus_url(id, status));
            }
        }
    });