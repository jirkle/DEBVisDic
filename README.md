# DEBVisDic ili addon
DEB is platform for dictionary writing systems development created and maintained by Masaryk university. Our goal was create addon for DEB part called DEBVisDic which is WordNet editor and browser. Our other goal was to repair some bugs and add some functionality sideways of the main task.

Our main goal was to enable pairing of program used ID with proper ILI. Files with ILI are available at  https://github.com/globalwordnet/ili. All file were made accessible throught app by creating small server based on Spring Boot, so we are able to call by Javascript server controller which ID we are looking for and server finds ID in proper file and returns ILI value asi string. For Spring Boot no database is used just files with ILI values loaded into memory. Back-end part of the app was created with service layer for better clarity and extensibility. Front-end part of the app simply calls back-end part and displays results.

Back-end default controller addresses are (all addresses requires request param id as string value):

For getting ILI from version 3.0 .tab file:
https://localhost:8443/api/ili/tab30 

For getting ILI from version 3.1 .tab file:
https://localhost:8443/api/ili/tab31

For getting ILI from version 1.3 .ttl file:
https://localhost:8443/api/ili/ttl30

For getting ILI from version 3.0 .ttl file:
https://localhost:8443/api/ili/ttl30

For getting ILI from version 3.1 .ttl file:
https://localhost:8443/api/ili/ttl31

For getting ILI from version ili-map.ttl file:
https://localhost:8443/api/ili/ttlmap

For getting ILI from csv file:
https://localhost:8443/api/ili/csv

For getting ILI from main .ttl file:
https://localhost:8443/api/ili/mainttl

For addresses and/or port modification please modify application.yml file:
```
server:
  contextPath: yourContextPath
  port: yourPortAddress
  ssl:
    enabled: true
    key-store: classpath:yourKeyStore.p12
    key-store-password: yourKeyStorePassword
    keyStoreType: yourKeyStroeType
    keyAlias: yourKeyAlias
 ```   
Also self-signed certificate is used self-signed certificate, so for proper deploying to final server, certificate should be changed to signed by proper authority.

# Final reports

[Jiří Kletečka](https://rawgit.com/jirkle/DEBVisDic/master/Zaverecne-zpravy/kletecka.html)

Copyright 2017 Jiří Kletečka and Tomáš Kopecký, Masaryk University.

Licensed under the Apache License, Version 2.0. See the file LICENSE for the full license text.
