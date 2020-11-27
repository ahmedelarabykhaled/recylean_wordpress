<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


define('FS_METHOD', 'direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '2V7Ud51/ckDOY~Ak-LuE7ScP#R8!,A.!Wbe=Ij+pC|.@/zZwx=JeQHMfd%-*7AD$' );
define( 'SECURE_AUTH_KEY',  'EW9cD9/K?CoZ>ZFB%kG{`Hc(2JY/Zj9XZ[QE*9$o8A|nCjoAaJkm?J(xQ&#(]2O7' );
define( 'LOGGED_IN_KEY',    '^Fn^DWM0L58~px%TmS95+Bn<A3O8B$w!J*[GD&Es.~&oTjHo%3i/)dsx@n4}:If9' );
define( 'NONCE_KEY',        '0Jywqa/&R3#< BQE)G>_A&A9(v0Z}/Ns9WO3~#H<%.OY#?Z[n}I<3,$ML8790/ y' );
define( 'AUTH_SALT',        '5F?8IhMAw>X|1mw]fXK~E +eUm/VpUwVsMoq|aOh%XcEi956+hT1nMcdV<-;b$1Y' );
define( 'SECURE_AUTH_SALT', ']:nRekS=Ys~dQpzWD7K|,ftpk>VIlTCrJ?G%[fZ*TtfgpZE_lNY/sX$HU+Hr_Ga4' );
define( 'LOGGED_IN_SALT',   'o{a4{xusZLC&@&p87GSB0tRK)T1>o8pkE#WLc#>k/E=RbjBe#d/P*2QZ%B*GF4f!' );
define( 'NONCE_SALT',       ')8$P_J+4Ys/-#LR$%*9w5WR28rLOo(k!Zek2V_f] 8dr)MgjSgQuChlocosPKB0U' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpxdlab_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
