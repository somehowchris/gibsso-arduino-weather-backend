import { Connection } from 'typeorm';

import { Action } from '@mardari/routing-controllers';

export function currentUserChecker(connection: Connection): (action: Action) => Promise<undefined> {
    return async function innerCurrentUserChecker(action: Action): Promise<undefined> {
        return action.request.user;
    };
}
