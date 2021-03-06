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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { CronJobRelation } from '../../generated/models';

/**
 * EnvironmentsCronJobsApiService - Auto-generated
 */
export class EnvironmentsCronJobsApiService extends ApiBaseService {
    /**
     * 
     * @summary Return a list of all Cron Jobs belonging to a environment
     * @param {number} environmentId Numeric ID of the environment to get cron jobs from
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listEnvironmentCronJobs(environmentId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<CronJobRelation>>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'listEnvironmentCronJobs');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/environments/{environment_id}/cron-jobs' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<CronJobRelation>>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }
}
