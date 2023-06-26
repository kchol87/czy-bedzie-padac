<?php
$cityName = isset($_GET['city']) ? $_GET['city'] : '';

$response = array();

// Wczytaj dane z pliku cities.json
$citiesFile = file_get_contents('cities.json');
$citiesData = json_decode($citiesFile, true);
$citiesList = $citiesData['cities'];

// Sprawdź czy podane miasto znajduje się na liście
$cityIndex = array_search($cityName, $citiesList);
if ($cityIndex !== false) {
    $response['message'] = 'Miasto ' . $cityName . ' znajduje się na pozycji ' . ($cityIndex + 1) . ' na liście.';
} else {
    $response['message'] = 'Miasto ' . $cityName . ' nie zostało znalezione na liście.';
}

echo json_encode($response);
?>
