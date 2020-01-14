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


import ApiClient from '../ApiClient';
import ActivityObject from './ActivityObject';
import IdmACL from './IdmACL';
import IdmRole from './IdmRole';
import IdmUser from './IdmUser';
import IdmWorkspace from './IdmWorkspace';
import JobsActionOutput from './JobsActionOutput';
import ProtobufAny from './ProtobufAny';
import TreeNode from './TreeNode';





/**
* The JobsActionMessage model module.
* @module model/JobsActionMessage
* @version 1.0
*/
export default class JobsActionMessage {
    /**
    * Constructs a new <code>JobsActionMessage</code>.
    * @alias module:model/JobsActionMessage
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>JobsActionMessage</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobsActionMessage} obj Optional instance to populate.
    * @return {module:model/JobsActionMessage} The populated <code>JobsActionMessage</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsActionMessage();

            
            
            

            if (data.hasOwnProperty('Event')) {
                obj['Event'] = ProtobufAny.constructFromObject(data['Event']);
            }
            if (data.hasOwnProperty('Nodes')) {
                obj['Nodes'] = ApiClient.convertToType(data['Nodes'], [TreeNode]);
            }
            if (data.hasOwnProperty('Users')) {
                obj['Users'] = ApiClient.convertToType(data['Users'], [IdmUser]);
            }
            if (data.hasOwnProperty('Roles')) {
                obj['Roles'] = ApiClient.convertToType(data['Roles'], [IdmRole]);
            }
            if (data.hasOwnProperty('Workspaces')) {
                obj['Workspaces'] = ApiClient.convertToType(data['Workspaces'], [IdmWorkspace]);
            }
            if (data.hasOwnProperty('Acls')) {
                obj['Acls'] = ApiClient.convertToType(data['Acls'], [IdmACL]);
            }
            if (data.hasOwnProperty('Activities')) {
                obj['Activities'] = ApiClient.convertToType(data['Activities'], [ActivityObject]);
            }
            if (data.hasOwnProperty('OutputChain')) {
                obj['OutputChain'] = ApiClient.convertToType(data['OutputChain'], [JobsActionOutput]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ProtobufAny} Event
    */
    Event = undefined;
    /**
    * @member {Array.<module:model/TreeNode>} Nodes
    */
    Nodes = undefined;
    /**
    * @member {Array.<module:model/IdmUser>} Users
    */
    Users = undefined;
    /**
    * @member {Array.<module:model/IdmRole>} Roles
    */
    Roles = undefined;
    /**
    * @member {Array.<module:model/IdmWorkspace>} Workspaces
    */
    Workspaces = undefined;
    /**
    * @member {Array.<module:model/IdmACL>} Acls
    */
    Acls = undefined;
    /**
    * @member {Array.<module:model/ActivityObject>} Activities
    */
    Activities = undefined;
    /**
    * @member {Array.<module:model/JobsActionOutput>} OutputChain
    */
    OutputChain = undefined;








}


