---
title: My First Months Of The Data Engineer Master
excerpt: A guided tour of the data-lab repo, plus what I built and learned in each course during the first part of the master's.
publishDate: 'January 30 2026'
tags:
  - Blog Post
  - Data Engineer
  - Project
---

Link to [data-lab](https://github.com/joseantonio002/data-lab) repo

## TL;DR

[data-lab](https://github.com/joseantonio002/data-lab) is basically my “working notebook” for the Master’s in Data Engineering I’m studying at the time of writing. Each top-level folder is a course, and inside each assignment folder there is a `README.md` explaining the objective, the environment, and what I learned. In this post I will:

1. Talk a bit about how this first part of the master has been for me.
2. Explain how the repo is structured and why I organized it this way.
3. Go course by course and describe the assignments and the main lessons I’m taking from them.

Courses covered:

- `business_intelligence` – BI strategy -> indicators -> multidimensional model (inmon and kimball) -> Power BI dashboard.
  - `TITSA_modeling` – Modeling + dashboard for a public transport operator (TITSA).
- `large_scale_data_processing` – Hadoop/HDFS/MapReduce/Spark fundamentals through practice.
  - `1_deploy_hadoop` – Manual Hadoop 3 cluster deployment in Docker.
  - `2_hdfs` – HDFS access from Python (PyArrow) + admin tasks (quotas, fsck, failures).
  - `3_mapreduce` – StackOverflow analytics with MapReduce (MRJob).
  - `4_spark` – StackOverflow analytics with PySpark DataFrames.
- `large_scale_databases` – Relational vs NoSQL vs graph vs lakehouse patterns.
  - `MySQL` – Load StackOverflow dump + analytical SQL.
  - `MongoDB` – Aggregation pipelines + derived collections.
  - `Cassandra` – Query-driven denormalized modeling + CQL.
  - `Neo4j` – Graph modeling + Cypher analytics/recommendations.
  - `delta_lake_spark` – Delta Lake tables on Spark + OPTIMIZE/ZORDER/VACUUM.
- `statistical_learning` – Supervised learning, ensembles, and deep learning on tabular data.
  - `1_logreg_lda_pcr_pls` – LogReg vs LDA + Ridge/Lasso/PCR/PLS.
  - `2_bagging_boosting_svm` – Random Forest vs boosting vs SVM.
  - `3_deep_learning` – Feedforward neural nets + regularization/early stopping.
- `unstructured_information_technologies` – Scraping/APIs + search/retrieval + text mining.
  - `scrapper.ipynb` – News scraping + Elasticsearch lexical vs semantic search.
  - `youtube.ipynb` – YouTube API collection + BM25 classification + sentiment + clustering.


## Intro

When I started this master I told myself something pretty simple: *don’t just “finish” assignments, use them as an excuse to actually learn tools you will use later.*

That mindset is the reason I made [data-lab](https://github.com/joseantonio002/data-lab).
I didn’t want a folder full of random PDFs and notebooks with names like `final_final_v3.ipynb`. I wanted something closer to a lab notebook: each course has its own space, each assignment is documented, and future-me can come back and understand what I did without having to open 20 files.

## My experience in this first part of the master

The biggest change for me compared to my degree (and compared to work) is the pace.
In the degree you usually have more time to let things sink in, and at work you focus on fewer things but go deeper because you’re solving real problems.
Here, the master is like a buffet of topics that are all connected, but you still have to jump between them quickly: one week you’re modeling indicators for a dashboard, and the next you’re debugging a Hadoop cluster.

Learning all these different things in a relatively short amount of time made me realize something: most of the “hard” part is not the syntax, but the mental model—understanding why the tools exist, their purpose, what problems they solve, and how they solve them.
Once you understand why the NameNode does what it does, how partitions, transformations, and actions work together to take advantage of parallelism in Spark, or why Cassandra forces you to denormalize in order to avoid joins, everything becomes much clearer.

Another thing I really liked is that the courses complement each other.
For example:

- In BI you learn to think in facts/dimensions and KPIs.
- In data processing you learn how to actually compute those facts at scale.
- In databases you learn different storage/query trade-offs depending on the workload.
- In statistical learning you learn how to evaluate models properly instead of just chasing accuracy.
- In unstructured info you learn that “data” is not always a nice table, and that search/retrieval is a whole world.

## Course 1: Business Intelligence (`business_intelligence`)

This course was interesting because it’s less about tools and more about translating business language into something you can actually compute.

The assignment is `business_intelligence/TITSA_modeling` and it’s basically a complete “first iteration” of a BI initiative for TITSA (the public bus operator in Tenerife). The deliverable isn’t only a dashboard: it starts way earlier.

The workflow (and what I learned from it) was something like:

### 1) From business strategy to measurable objectives

Instead of starting with data tables, the assignment forces you to start with objectives and critical success factors (CSFs). So you go:

objective -> CSF -> indicator

And the key is that every indicator must be tied to an action. If the KPI is bad, what do you do tomorrow morning?

This sounds obvious, but it’s very easy to create dashboards that are “interesting” and useless at the same time.

### 2) Defining indicators properly

In the report I defined indicators across three big areas (planning, workshop/inventory, driver management). Things like punctuality, saturation, stockout risk, mean repair time, etc.

The part that made me slow down was being precise:

- exact definition (what counts as “punctual”?)
- the time window (daily, weekly, monthly)
- the grain of the measurement
- the target/goal, not just “lower is better”

### 3) Designing a multidimensional model that can compute those indicators

The model ends up with fact tables like trips (transactional) and inventory (snapshot), plus dimensions with SCD decisions (type 2, type 4, etc.).

Before this assignment I had never designed a data model, now I understand things like why you’d choose type 2 for historical context, and why you might keep a separate history table (type 4) for employees.

### 4) Building the Power BI dashboard

The dashboard focuses on the planning area and the trips process.
It’s a good exercise because Power BI pushes you to think about the user persona and the cadence: is this something used daily, weekly, monthly?

Even if you don’t love dashboards (I don’t), it’s worth it because it forces you to “close the loop”: not just modeling for the sake of modeling, but actually showing what the business would see.

## Course 2: Large Scale Data Processing (`large_scale_data_processing`)

The assignments for this course are basically a progression:

1. deploy Hadoop
2. use HDFS from Python and do admin tasks
3. write MapReduce jobs
4. write Spark jobs

### Practice 1: Deploying a Hadoop cluster (`large_scale_data_processing/1_deploy_hadoop`)

This assignment is manual Hadoop 3 cluster deployment in Docker.
And I mean manual: build a base image, create containers for each role, configure the XMLs, set up users, format the NameNode, start daemons, check UIs, run example jobs.

Some highlights:

- You really learn the separation between HDFS (storage) and YARN (resource management).
- Good review of Linux basics, creating users, configuration files...
- You understand why people love automation tools: doing this by hand is educational but painful.

The cool part is that the assignment doesn’t stop at “it runs”. It also includes:

- adding a BackupNode (checkpointing)
- adding the TimelineServer
- simulating adding/removing DataNodes
- rack awareness (replicas across fault domains)

### Practice 2: HDFS access + admin tasks (`large_scale_data_processing/2_hdfs`)

This one is half development, half “be the sysadmin”.

On the development side, I built small Python tools using PyArrow:

- `filesystem_cat.py`: like `hdfs dfs -cat`, but it works with `hdfs://` and `file://` URIs.
- `copy_half_file.py`: copies the last half of a file from one filesystem to another (and it forces you to think about streaming + seeking).

On the admin side:

- quotas (and the funny detail that a directory itself consumes namespace quota)
- `hdfs fsck` to inspect replication health
- killing DataNodes to simulate failures, then recovering by adding a new node

### Practice 3: MapReduce with MRJob (`large_scale_data_processing/3_mapreduce`)

This one uses StackOverflow CSV data and MRJob to implement MapReduce pipelines.

Mapreduce forces you to think in terms of key-values:

- what is the key in each step?
- what is the value in each step?
- can I combine locally?
- how much data am I shuffling?

The exercises cover patterns like:

- counting and sorting answers per question
- global ordering (multi-step trick)
- distributed Top-K
- joins (prefixing records and grouping by the join key)
- co-occurrence counts (tag pairs)
- multi-step pipelines to classify “technology trends” over time

Honestly, MapReduce feels old compared to Spark, but it’s still a great mental training.
Once you do this, you understand why Spark is such a big improvement: same ideas, but less pain.

### Practice 4: PySpark scripts (`large_scale_data_processing/4_spark`)

This assignment is basically: take similar StackOverflow analytics, but implement them in Spark using DataFrames.

The deliverable is four scripts (`ej1.py`–`ej4.py`) that you run with `spark-submit`.

The Spark-specific things I learned were:

- lazy evaluation (you can build a huge pipeline and nothing happens until an action)
- narrow vs wide transformations (and why shuffles hurt)
- window functions for rankings and year-over-year deltas
- dealing with tags as “nested data” (split/explode/intersect/deduplicate)
- the “multiple part files” default, and how to write single-file outputs when you must


## Course 3: Large Scale Databases (`large_scale_databases`)

This course is a tour of database models, but in a very practical way: every assignment forces you to ingest data, model it according to the system, and answer analytical questions.

### MySQL (`large_scale_databases/MySQL`)

Here the focus is relational analytics at scale.

The assignment is also a nice Docker exercise: there’s a `docker-compose` stack with an init container that downloads the SQL dump, then MySQL loads it, then a notebook connects to it. Here I have to give credit to my teacher [Diego Sevilla](https://github.com/dsevilla), who really knows his way around environments, orchestration, and automation.

On the SQL side I practiced:

- exploring schema and checking integrity
- writing analytical queries over big tables
- building derived “fact tables” (response times, ratios, user scores)
- window functions and percentile-style ranking

The main lesson: relational databases are still amazing for structured analytics when your data fits the model, and SQL is hard to beat for clarity.

### MongoDB (`large_scale_databases/MongoDB`)

This assignment is about aggregation pipelines.

MongoDB forces a different mindset: instead of joins + group by, you build a pipeline of stages.
And you learn the equivalents:

- `$unwind` is basically “explode array”
- `$group` is group-by
- `$lookup` is the join (but with the cost/limitations of document databases)
- `$unionWith` is how you do UNION-like things

One part I really liked is that in MongoDB you can filter documents inside the `$group` stage itself, deciding exactly which documents participate in the aggregation.
This is quite different from SQL, where once you apply a GROUP BY, filtering usually has to be done either before the aggregation (with WHERE) or after it (with HAVING), but not during the grouping process.

### Cassandra (`large_scale_databases/Cassandra`)

This one is the most “modeling heavy” database assignment.

Cassandra doesn’t want you to design a normalized schema and then query anything. It wants you to design tables around your queries.

So the assignment involves:

- reading Parquet schemas
- mapping types to CQL types
- generating `CREATE TABLE` statements
- designing partition keys and clustering keys to fit query patterns
- denormalizing into multiple tables like `posts_by_user`, `Questions`, `Answers`, `UserActivity`, etc.

Really interesting and unique database, but I don't see many use cases for it.

### Neo4j (`large_scale_databases/Neo4j`)

Neo4j was the most fun.

Instead of tables, you build a graph: users, posts, comments, tags, relationships.
And then you use Cypher to do things that would be annoying in SQL:

- recommendations (friends -> tags you don’t follow)
- scoring users with multi-criteria logic
- path queries like “connected within 3 hops”

Also, building constraints and seeing how much it affects performance (especially for `MERGE`) was a good practical lesson.
If you don’t index correctly, you will suffer.

### Delta Lake + Spark (`large_scale_databases/delta_lake_spark`)

This was optional work, but thanks to doing it, I realized the big mistake I made in my [previous project](https://joseantonio002.github.io/blog/post-4/), calling it a “lakehouse” when it wasn’t.

This assignment made the lakehouse idea click.

- Parquet files alone are not a lakehouse.
- A table format like Delta adds ACID, time travel, schema enforcement/evolution.
- You can actually measure improvements from compaction and clustering (`OPTIMIZE`, `ZORDER`, `VACUUM`).

And the comparisons vs Iceberg and raw Parquet were useful because it’s a very real decision in industry: engine-driven (Spark-centric) vs more decoupled (Trino + Iceberg) setups.

## Course 4: Statistical Learning (`statistical_learning`)

This course is more “classic data science”, but it’s still very relevant even if your main interest is data engineering.
Because if you build pipelines for ML, you need to understand what makes a model trustworthy.

Also, it’s the course that kept reminding me: accuracy is not everything.

### Assignment 1: LogReg, LDA, Ridge/Lasso, PCR/PLS (`statistical_learning/1_logreg_lda_pcr_pls`)

The first assignment is split into two parts:

1) classification: Logistic Regression vs LDA on the `College` dataset
2) regression: predicting `Apps` with OLS vs Ridge/Lasso/PCR/PLS (multicollinearity theme)

Main takeaways:

- Logistic regression is simple but surprisingly strong, and the coefficients are still one of the best “explainability” tools.
- LDA is elegant, but if its assumptions don’t hold (normality / shared covariance), it can underperform.
- Multicollinearity is not just a theory word: you can literally see unstable coefficients, and regularization helps.
- PLS was a nice middle ground: still reduces dimensionality but takes `y` into account.

### Assignment 2: Bagging, Boosting & SVM (`statistical_learning/2_bagging_boosting_svm`)

Here we used the BRFSS diabetes dataset and compared:

- Random Forest
- gradient boosting (HistGradientBoostingClassifier)
- SVM with RBF kernel

The assignment included proper tuning and the one-standard-error rule, which I really liked because it forces you to choose simpler models when the performance difference is basically noise.

The result was also a good reality check: all models end up around ~75% accuracy.
Sometimes the limit is the dataset, not the algorithm.

### Assignment 3: Deep Learning (`statistical_learning/3_deep_learning`)

This is basically: “ok, now do it with neural nets”.

I built multiple feedforward architectures, from a simple baseline to deeper nets with dropout, BatchNorm, and L1/L2 regularization, plus early stopping.

And the funny part is that the final conclusion is almost the opposite of what deep learning hype would suggest:

- the simple ANN performs basically the same as the ensembles
- deeper nets mostly increase training time
- regularization helps stability, but doesn’t magically create signal

So the lesson is: deep learning is not a default choice for tabular data.
Pick the simplest thing that works, and only go deeper when you have a reason.

## Course 5: Unstructured Information Technologies (`unstructured_information_technologies`)

This course is about handling text data. It was a lot of theory about NLP and even LLM's, the only assignments for this course were:

### Assignment 1: News scraping + Elasticsearch search (`unstructured_information_technologies/scrapper.ipynb`)

This notebook is a full pipeline:

- scrape 800+ economic articles using different strategies (RSS, JSON-LD, and custom spiders)
- normalize metadata and text
- index everything into Elasticsearch
- compare lexical search (BM25) with semantic retrieval (dense vectors + k-NN), and also do classic TF/IDF experiments

What I learned here is that information retrieval is deeper than I thought.
Elasticsearch is not just “a database that can search”. The analyzer configuration alone can change everything, and hybrid search (lexical + semantic) is a very practical compromise.

### Assignment 2: YouTube API + text mining (`unstructured_information_technologies/youtube.ipynb`)

This one is a mix of data collection + ML:

- collect videos for a bunch of Spanish channels (fitness/cooking/science)
- build classifiers from video descriptions using BM25-style features
- run sentiment analysis on comments with a transformer model (BETO)
- compute semantic similarity between channels and cluster them

The “engineering” lesson is the API side: quotas, pagination, making sure your dataset is balanced across time (not only recent videos), and writing your pipeline so it doesn’t die halfway without saving progress.

The “ML” lesson is that classical methods like BM25 are still very strong for text classification, and transformers are great when the task is basically “label lots of text quickly” (like sentiment) and you don’t want to build your own model.

## Closing thoughts

If you look at the repo as a whole, the common theme is not a specific tool. It’s learning how to move from:

- raw data -> structured representation -> computation -> analysis

And doing it in different worlds: relational, document, wide-column, graph, distributed compute, ML, and unstructured text.

I’m sure in a year I’ll look back and see a bunch of mistakes (like I did with my “fake lakehouse” project), but honestly that’s part of the point. Because it’s proof that I’m constantly learning.
