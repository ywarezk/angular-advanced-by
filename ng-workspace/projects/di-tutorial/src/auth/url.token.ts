/**
 * expose a way to config the user service from outside
 * 
 * InjectionToken - unique key in Injector key
 */

import { InjectionToken } from '@angular/core';

interface IUserServiceConfig {
    url : string
}

export const UserServiceConfig : InjectionToken<IUserServiceConfig> = new InjectionToken('for debugging for you to know that UserServiceConfig injection error');