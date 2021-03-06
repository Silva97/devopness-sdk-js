/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DeploymentType } from './deployment-type';

/**
 * 
 * @export
 * @interface DeploymentCreate
 */
export interface DeploymentCreate {
    /**
     * 
     * @type {DeploymentType}
     * @memberof DeploymentCreate
     */
    type: DeploymentType;
    /**
     * 
     * @type {string}
     * @memberof DeploymentCreate
     */
    branch: string;
    /**
     * 
     * @type {string}
     * @memberof DeploymentCreate
     */
    hash?: string;
    /**
     * List of servers ids that the deploy will be triggered to
     * @type {Array<number>}
     * @memberof DeploymentCreate
     */
    servers?: Array<number>;
}

