import { useContainer as classValidatorUseContainer } from 'class-validator';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework-w3tec';
import { useContainer as typeGraphQLUseContainer } from 'type-graphql';
import { Container } from 'typedi';
import { useContainer as ormUseContainer } from 'typeorm';

import { useContainer as routingUseContainer } from '@mardari/routing-controllers';

export const iocLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {

    /**
     * Setup routing-controllers to use typedi container.
     */
    routingUseContainer(Container);
    ormUseContainer(Container);
    classValidatorUseContainer(Container);
    typeGraphQLUseContainer(Container);
};
