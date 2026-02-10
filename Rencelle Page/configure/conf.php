<?php
// Basic application config — edit values below.

$config = [
    'env' => 'development',
    'debug' => true,
    'base_dir' => dirname(__DIR__), // c:\xampp\htdocs\Rencelle Page
    'base_url' => 'http://localhost/Rencelle%20Page', // adjust if needed

    'db' => [
        'host' => '127.0.0.1',
        'port' => 3306,
        'name' => 'rhencelledb', // set your DB name
        'user' => 'root',          // set DB user
        'pass' => '',              // set DB password
        'charset' => 'utf8mb4',
    ],

    'session' => [
        'name' => 'rencelle_session',
        'cookie_lifetime' => 0,
    ],
];

/**
 * Get config value by dot key, e.g. cfg('db.host')
 */
function cfg(string $key, $default = null) {
    global $config;
    $parts = explode('.', $key);
    $v = $config;
    foreach ($parts as $p) {
        if (!is_array($v) || !array_key_exists($p, $v)) {
            return $default;
        }
        $v = $v[$p];
    }
    return $v;
}

/**
 * Create and return a PDO instance using config db settings.
 * Throws PDOException on error.
 */
function getPDO(): PDO {
    $host = cfg('db.host');
    $port = cfg('db.port');
    $name = cfg('db.name');
    $user = cfg('db.user');
    $pass = cfg('db.pass');
    $charset = cfg('db.charset', 'utf8mb4');

    $dsn = "mysql:host={$host};port={$port};dbname={$name};charset={$charset}";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    return new PDO($dsn, $user, $pass, $options);
}
// Simple DB connection — edit these values
$db_host = '127.0.0.1';
$db_name = 'rhencelledb';
$db_user = 'root';
$db_pass = '';

$dsn = "mysql:host={$db_host};dbname={$db_name};charset=utf8mb4";

try {
    $pdo = new PDO($dsn, $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    // Development: stop and show error. In production, log instead.
    die('DB connection failed: ' . $e->getMessage());
}