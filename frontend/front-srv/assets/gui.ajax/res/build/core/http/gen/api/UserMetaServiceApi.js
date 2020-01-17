/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _modelIdmSearchUserMetaRequest = require('../model/IdmSearchUserMetaRequest');

var _modelIdmSearchUserMetaRequest2 = _interopRequireDefault(_modelIdmSearchUserMetaRequest);

var _modelIdmUpdateUserMetaNamespaceRequest = require('../model/IdmUpdateUserMetaNamespaceRequest');

var _modelIdmUpdateUserMetaNamespaceRequest2 = _interopRequireDefault(_modelIdmUpdateUserMetaNamespaceRequest);

var _modelIdmUpdateUserMetaNamespaceResponse = require('../model/IdmUpdateUserMetaNamespaceResponse');

var _modelIdmUpdateUserMetaNamespaceResponse2 = _interopRequireDefault(_modelIdmUpdateUserMetaNamespaceResponse);

var _modelIdmUpdateUserMetaRequest = require('../model/IdmUpdateUserMetaRequest');

var _modelIdmUpdateUserMetaRequest2 = _interopRequireDefault(_modelIdmUpdateUserMetaRequest);

var _modelIdmUpdateUserMetaResponse = require('../model/IdmUpdateUserMetaResponse');

var _modelIdmUpdateUserMetaResponse2 = _interopRequireDefault(_modelIdmUpdateUserMetaResponse);

var _modelRestBulkMetaResponse = require('../model/RestBulkMetaResponse');

var _modelRestBulkMetaResponse2 = _interopRequireDefault(_modelRestBulkMetaResponse);

var _modelRestDeleteUserMetaTagsResponse = require('../model/RestDeleteUserMetaTagsResponse');

var _modelRestDeleteUserMetaTagsResponse2 = _interopRequireDefault(_modelRestDeleteUserMetaTagsResponse);

var _modelRestListUserMetaTagsResponse = require('../model/RestListUserMetaTagsResponse');

var _modelRestListUserMetaTagsResponse2 = _interopRequireDefault(_modelRestListUserMetaTagsResponse);

var _modelRestPutUserMetaTagRequest = require('../model/RestPutUserMetaTagRequest');

var _modelRestPutUserMetaTagRequest2 = _interopRequireDefault(_modelRestPutUserMetaTagRequest);

var _modelRestPutUserMetaTagResponse = require('../model/RestPutUserMetaTagResponse');

var _modelRestPutUserMetaTagResponse2 = _interopRequireDefault(_modelRestPutUserMetaTagResponse);

var _modelRestUserBookmarksRequest = require('../model/RestUserBookmarksRequest');

var _modelRestUserBookmarksRequest2 = _interopRequireDefault(_modelRestUserBookmarksRequest);

var _modelRestUserMetaCollection = require('../model/RestUserMetaCollection');

var _modelRestUserMetaCollection2 = _interopRequireDefault(_modelRestUserMetaCollection);

var _modelRestUserMetaNamespaceCollection = require('../model/RestUserMetaNamespaceCollection');

var _modelRestUserMetaNamespaceCollection2 = _interopRequireDefault(_modelRestUserMetaNamespaceCollection);

/**
* UserMetaService service.
* @module api/UserMetaServiceApi
* @version 1.0
*/

var UserMetaServiceApi = (function () {

  /**
  * Constructs a new UserMetaServiceApi. 
  * @alias module:api/UserMetaServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function UserMetaServiceApi(apiClient) {
    _classCallCheck(this, UserMetaServiceApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * Delete one or all tags for a given namespace (use * for all tags)
   * @param {String} namespace 
   * @param {String} tags 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteUserMetaTagsResponse} and HTTP response
   */

  UserMetaServiceApi.prototype.deleteUserMetaTagsWithHttpInfo = function deleteUserMetaTagsWithHttpInfo(namespace, tags) {
    var postBody = null;

    // verify the required parameter 'namespace' is set
    if (namespace === undefined || namespace === null) {
      throw new Error("Missing the required parameter 'namespace' when calling deleteUserMetaTags");
    }

    // verify the required parameter 'tags' is set
    if (tags === undefined || tags === null) {
      throw new Error("Missing the required parameter 'tags' when calling deleteUserMetaTags");
    }

    var pathParams = {
      'Namespace': namespace,
      'Tags': tags
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestDeleteUserMetaTagsResponse2['default'];

    return this.apiClient.callApi('/user-meta/tags/{Namespace}/{Tags}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Delete one or all tags for a given namespace (use * for all tags)
   * @param {String} namespace 
   * @param {String} tags 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteUserMetaTagsResponse}
   */

  UserMetaServiceApi.prototype.deleteUserMetaTags = function deleteUserMetaTags(namespace, tags) {
    return this.deleteUserMetaTagsWithHttpInfo(namespace, tags).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * List defined meta namespaces
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserMetaNamespaceCollection} and HTTP response
   */

  UserMetaServiceApi.prototype.listUserMetaNamespaceWithHttpInfo = function listUserMetaNamespaceWithHttpInfo() {
    var postBody = null;

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestUserMetaNamespaceCollection2['default'];

    return this.apiClient.callApi('/user-meta/namespace', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * List defined meta namespaces
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserMetaNamespaceCollection}
   */

  UserMetaServiceApi.prototype.listUserMetaNamespace = function listUserMetaNamespace() {
    return this.listUserMetaNamespaceWithHttpInfo().then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * List Tags for a given namespace
   * @param {String} namespace 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListUserMetaTagsResponse} and HTTP response
   */

  UserMetaServiceApi.prototype.listUserMetaTagsWithHttpInfo = function listUserMetaTagsWithHttpInfo(namespace) {
    var postBody = null;

    // verify the required parameter 'namespace' is set
    if (namespace === undefined || namespace === null) {
      throw new Error("Missing the required parameter 'namespace' when calling listUserMetaTags");
    }

    var pathParams = {
      'Namespace': namespace
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestListUserMetaTagsResponse2['default'];

    return this.apiClient.callApi('/user-meta/tags/{Namespace}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * List Tags for a given namespace
   * @param {String} namespace 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListUserMetaTagsResponse}
   */

  UserMetaServiceApi.prototype.listUserMetaTags = function listUserMetaTags(namespace) {
    return this.listUserMetaTagsWithHttpInfo(namespace).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Add a new value to Tags for a given namespace
   * @param {String} namespace 
   * @param {module:model/RestPutUserMetaTagRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestPutUserMetaTagResponse} and HTTP response
   */

  UserMetaServiceApi.prototype.putUserMetaTagWithHttpInfo = function putUserMetaTagWithHttpInfo(namespace, body) {
    var postBody = body;

    // verify the required parameter 'namespace' is set
    if (namespace === undefined || namespace === null) {
      throw new Error("Missing the required parameter 'namespace' when calling putUserMetaTag");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling putUserMetaTag");
    }

    var pathParams = {
      'Namespace': namespace
    };
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestPutUserMetaTagResponse2['default'];

    return this.apiClient.callApi('/user-meta/tags/{Namespace}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Add a new value to Tags for a given namespace
   * @param {String} namespace 
   * @param {module:model/RestPutUserMetaTagRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestPutUserMetaTagResponse}
   */

  UserMetaServiceApi.prototype.putUserMetaTag = function putUserMetaTag(namespace, body) {
    return this.putUserMetaTagWithHttpInfo(namespace, body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Search a list of meta by node Id or by User id and by namespace
   * @param {module:model/IdmSearchUserMetaRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserMetaCollection} and HTTP response
   */

  UserMetaServiceApi.prototype.searchUserMetaWithHttpInfo = function searchUserMetaWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchUserMeta");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestUserMetaCollection2['default'];

    return this.apiClient.callApi('/user-meta/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Search a list of meta by node Id or by User id and by namespace
   * @param {module:model/IdmSearchUserMetaRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserMetaCollection}
   */

  UserMetaServiceApi.prototype.searchUserMeta = function searchUserMeta(body) {
    return this.searchUserMetaWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Update/delete user meta
   * @param {module:model/IdmUpdateUserMetaRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUpdateUserMetaResponse} and HTTP response
   */

  UserMetaServiceApi.prototype.updateUserMetaWithHttpInfo = function updateUserMetaWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateUserMeta");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelIdmUpdateUserMetaResponse2['default'];

    return this.apiClient.callApi('/user-meta/update', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Update/delete user meta
   * @param {module:model/IdmUpdateUserMetaRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUpdateUserMetaResponse}
   */

  UserMetaServiceApi.prototype.updateUserMeta = function updateUserMeta(body) {
    return this.updateUserMetaWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Admin: update namespaces
   * @param {module:model/IdmUpdateUserMetaNamespaceRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUpdateUserMetaNamespaceResponse} and HTTP response
   */

  UserMetaServiceApi.prototype.updateUserMetaNamespaceWithHttpInfo = function updateUserMetaNamespaceWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateUserMetaNamespace");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelIdmUpdateUserMetaNamespaceResponse2['default'];

    return this.apiClient.callApi('/user-meta/namespace', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Admin: update namespaces
   * @param {module:model/IdmUpdateUserMetaNamespaceRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUpdateUserMetaNamespaceResponse}
   */

  UserMetaServiceApi.prototype.updateUserMetaNamespace = function updateUserMetaNamespace(body) {
    return this.updateUserMetaNamespaceWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  /**
   * Special API for Bookmarks, will load userMeta and the associated nodes, and return as a node list
   * @param {module:model/RestUserBookmarksRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestBulkMetaResponse} and HTTP response
   */

  UserMetaServiceApi.prototype.userBookmarksWithHttpInfo = function userBookmarksWithHttpInfo(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling userBookmarks");
    }

    var pathParams = {};
    var queryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelRestBulkMetaResponse2['default'];

    return this.apiClient.callApi('/user-meta/bookmarks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * Special API for Bookmarks, will load userMeta and the associated nodes, and return as a node list
   * @param {module:model/RestUserBookmarksRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestBulkMetaResponse}
   */

  UserMetaServiceApi.prototype.userBookmarks = function userBookmarks(body) {
    return this.userBookmarksWithHttpInfo(body).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  return UserMetaServiceApi;
})();

exports['default'] = UserMetaServiceApi;
module.exports = exports['default'];
