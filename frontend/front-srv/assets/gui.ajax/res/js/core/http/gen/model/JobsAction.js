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
import JobsActionOutputFilter from './JobsActionOutputFilter';
import JobsContextMetaFilter from './JobsContextMetaFilter';
import JobsIdmSelector from './JobsIdmSelector';
import JobsNodesSelector from './JobsNodesSelector';
import JobsUsersSelector from './JobsUsersSelector';





/**
* The JobsAction model module.
* @module model/JobsAction
* @version 1.0
*/
export default class JobsAction {
    /**
    * Constructs a new <code>JobsAction</code>.
    * @alias module:model/JobsAction
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>JobsAction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobsAction} obj Optional instance to populate.
    * @return {module:model/JobsAction} The populated <code>JobsAction</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsAction();

            
            
            

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
            }
            if (data.hasOwnProperty('NodesSelector')) {
                obj['NodesSelector'] = JobsNodesSelector.constructFromObject(data['NodesSelector']);
            }
            if (data.hasOwnProperty('UsersSelector')) {
                obj['UsersSelector'] = JobsUsersSelector.constructFromObject(data['UsersSelector']);
            }
            if (data.hasOwnProperty('NodesFilter')) {
                obj['NodesFilter'] = JobsNodesSelector.constructFromObject(data['NodesFilter']);
            }
            if (data.hasOwnProperty('UsersFilter')) {
                obj['UsersFilter'] = JobsUsersSelector.constructFromObject(data['UsersFilter']);
            }
            if (data.hasOwnProperty('IdmSelector')) {
                obj['IdmSelector'] = JobsIdmSelector.constructFromObject(data['IdmSelector']);
            }
            if (data.hasOwnProperty('IdmFilter')) {
                obj['IdmFilter'] = JobsIdmSelector.constructFromObject(data['IdmFilter']);
            }
            if (data.hasOwnProperty('ActionOutputFilter')) {
                obj['ActionOutputFilter'] = JobsActionOutputFilter.constructFromObject(data['ActionOutputFilter']);
            }
            if (data.hasOwnProperty('ContextMetaFilter')) {
                obj['ContextMetaFilter'] = JobsContextMetaFilter.constructFromObject(data['ContextMetaFilter']);
            }
            if (data.hasOwnProperty('Parameters')) {
                obj['Parameters'] = ApiClient.convertToType(data['Parameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('ChainedActions')) {
                obj['ChainedActions'] = ApiClient.convertToType(data['ChainedActions'], [JobsAction]);
            }
            if (data.hasOwnProperty('FailedFilterActions')) {
                obj['FailedFilterActions'] = ApiClient.convertToType(data['FailedFilterActions'], [JobsAction]);
            }
        }
        return obj;
    }

    /**
    * @member {String} ID
    */
    ID = undefined;
    /**
    * @member {module:model/JobsNodesSelector} NodesSelector
    */
    NodesSelector = undefined;
    /**
    * @member {module:model/JobsUsersSelector} UsersSelector
    */
    UsersSelector = undefined;
    /**
    * @member {module:model/JobsNodesSelector} NodesFilter
    */
    NodesFilter = undefined;
    /**
    * @member {module:model/JobsUsersSelector} UsersFilter
    */
    UsersFilter = undefined;
    /**
    * @member {module:model/JobsIdmSelector} IdmSelector
    */
    IdmSelector = undefined;
    /**
    * @member {module:model/JobsIdmSelector} IdmFilter
    */
    IdmFilter = undefined;
    /**
    * @member {module:model/JobsActionOutputFilter} ActionOutputFilter
    */
    ActionOutputFilter = undefined;
    /**
    * @member {module:model/JobsContextMetaFilter} ContextMetaFilter
    */
    ContextMetaFilter = undefined;
    /**
    * @member {Object.<String, String>} Parameters
    */
    Parameters = undefined;
    /**
    * @member {Array.<module:model/JobsAction>} ChainedActions
    */
    ChainedActions = undefined;
    /**
    * @member {Array.<module:model/JobsAction>} FailedFilterActions
    */
    FailedFilterActions = undefined;








}


