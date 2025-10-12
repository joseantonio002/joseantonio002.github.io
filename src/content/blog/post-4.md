---
title: My First Data Engineer Project
excerpt: Project replicating what I did in TITSA, create a pipeline, automatize it and train ML/NN models
publishDate: 'June 30 2025'
tags:
  - Project
  - Data Engineer
  - Data Science
---

Cambiarle el título por algo más llamativo (Dashboard automático de noseque datos)

Ya que voy a hacer esto, los datos que pille que sea algo interesante/significativo que aporte valor

Echarle una repasada al primer post

Objetivo:
  Crear un pipeline que traiga datos de una API a un data warehouse (base de datos con duckdb XD) mensualmente (o cada X tiempo), que se entrenen unos modelos de ML cada mes con los nuevos datos y se actualize un dashboard público para todo el mundo

Tecnologías/conceptos que estoy trabajando:
  Data lifecycle
  Data pipeline
  ETL
  Batch ingestion
  Orchestration with Airflow (aunque en verdad no es necesario, solo para aprender)
  Data warehouse, SQL, OLAP, DuckDB (aunque en verdad no es necesario, para aprender y próximo proyecto exclusivamente de SQL data modeling, data analysis con SQL)
  Data processing with Pandas, Data wrangling
  ML/NN models, EDA, Feature Engineering, training, predictions. Ensembling methods
  Data visualization
  Deploy a dashboard with github pages and Quarto(?)

Plan:
  1º) Dejar esto ahora un poco de lado, calentar con el kaggle que tengo pendiente y aprender ensembling con ese. Leerme los artículos 
  2º) Una vez terminado y maneje ensembling methods empezar con esto, primero extraer todos los datos y entrenar
  3º) Script que te pille los datos cada mes en vez de todos y que los meta en la base de datos (¿se podrían juntar paso 1 y 2 para hacerlo más elegante?)
  4º) Dashboard deployment with github pages
  5º) Automatize with Apache Airflow