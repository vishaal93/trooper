/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Sequelize from 'sequelize';
import { databaseUrl } from '../config';

const sequelize = new Sequelize(databaseUrl, {
    define: {
        freezeTableName: true,
    },
    dialectOptions: {
        'SSL_VERIFY_SERVER_CERT': '../amazon-rds-ca-cert.pem'
    }
});

export default sequelize;
