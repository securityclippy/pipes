// data/pipelines.tsx

import { Pipeline } from '../models/Pipeline';

const dummyPipelines: Pipeline[] = [
  {
    id: '1',
    name: 'Data Ingestion Pipeline',
    description: 'Ingests data from various sources and stores it in a database',
    enabled: true,
    input: {
      id: 'input1',
      name: 'CSV File Input',
      description: 'Reads data from a CSV file',
      type: 'file',
      settings: {
        path: '/path/to/input.csv',
        delimiter: ',',
        encoding: 'utf-8',
      },
    },
    transform: {
      id: 'transform1',
      name: 'Data Cleaning Transform',
      description: 'Cleans and preprocesses the input data',
      type: 'script',
      settings: {
        script: 'clean_data.py',
        parameters: {
          column_mapping: {
            'ID': 'id',
            'Name': 'name',
            'Age': 'age',
          },
          remove_duplicates: true,
        },
      },
    },
    output: {
      id: 'output1',
      name: 'Database Output',
      description: 'Stores the transformed data in a database',
      type: 'database',
      settings: {
        url: 'jdbc:postgresql://localhost:5432/mydb',
        table: 'processed_data',
        schema: 'public',
        username: 'user',
        password: 'password',
      },
    },
  },
  {
    id: '2',
    name: 'Data Analytics Pipeline',
    description: 'Performs data analytics and generates reports',
    enabled: false,
    input: {
      id: 'input2',
      name: 'Database Input',
      description: 'Reads data from a database table',
      type: 'database',
      settings: {
        url: 'jdbc:mysql://localhost:3306/analytics_db',
        table: 'raw_data',
        username: 'analyst',
        password: 'password',
      },
    },
    transform: {
      id: 'transform2',
      name: 'Data Aggregation Transform',
      description: 'Aggregates data and calculates metrics',
      type: 'function',
      settings: {
        functionName: 'aggregateData',
        parameters: {
          dimensions: ['region', 'product'],
          metrics: ['sales', 'revenue'],
        },
      },
    },
    output: {
      id: 'output2',
      name: 'Dashboard Output',
      description: 'Sends the aggregated data to a dashboard',
      type: 'api',
      settings: {
        url: 'https://mydashboard.com/api/data',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer token123',
        },
      },
    },
  },
  {
    id: '3',
    name: 'Machine Learning Pipeline',
    description: 'Trains a machine learning model and generates predictions',
    enabled: true,
    input: {
      id: 'input3',
      name: 'Training Data Input',
      description: 'Reads training data from a file',
      type: 'file',
      settings: {
        path: '/path/to/training_data.csv',
        format: 'csv',
        header: true,
      },
    },
    transform: {
      id: 'transform3',
      name: 'Model Training Transform',
      description: 'Trains a machine learning model',
      type: 'script',
      settings: {
        script: 'train_model.py',
        parameters: {
          algorithm: 'RandomForest',
          max_depth: 10,
          n_estimators: 100,
        },
      },
    },
    output: {
      id: 'output3',
      name: 'Model Output',
      description: 'Saves the trained model to a file',
      type: 'file',
      settings: {
        path: '/path/to/trained_model.pkl',
        format: 'pickle',
      },
    },
  },
  {
    id: '4',
    name: 'Streaming Data Pipeline',
    description: 'Processes streaming data in real-time',
    enabled: false,
    input: {
      id: 'input4',
      name: 'Kafka Input',
      description: 'Reads data from a Kafka topic',
      type: 'kafka',
      settings: {
        bootstrapServers: 'localhost:9092',
        topic: 'raw_events',
        groupId: 'stream_processing_group',
      },
    },
    transform: {
      id: 'transform4',
      name: 'Real-time Aggregation Transform',
      description: 'Aggregates streaming data in real-time',
      type: 'function',
      settings: {
        functionName: 'aggregateStream',
        parameters: {
          windowDuration: '5 minutes',
          aggregateFields: ['event_type', 'user_id'],
        },
      },
    },
    output: {
      id: 'output4',
      name: 'Real-time Dashboard Output',
      description: 'Sends aggregated data to a real-time dashboard',
      type: 'websocket',
      settings: {
        url: 'ws://localhost:8080/dashboard',
        protocol: 'ws',
      },
    },
  },
  {
    id: '5',
    name: 'Image Processing Pipeline',
    description: 'Processes and analyzes images',
    enabled: true,
    input: {
      id: 'input5',
      name: 'Image Directory Input',
      description: 'Reads images from a directory',
      type: 'directory',
      settings: {
        path: '/path/to/image/directory',
        recursive: true,
        extensions: ['.jpg', '.png'],
      },
    },
    transform: {
      id: 'transform5',
      name: 'Image Resizing Transform',
      description: 'Resizes and compresses images',
      type: 'script',
      settings: {
        script: 'resize_images.py',
        parameters: {
          targetWidth: 800,
          targetHeight: 600,
          format: 'jpeg',
          quality: 85,
        },
      },
    },
    output: {
      id: 'output5',
      name: 'Cloud Storage Output',
      description: 'Uploads processed images to cloud storage',
      type: 'cloudStorage',
      settings: {
        provider: 'AWS',
        bucketName: 'my-image-bucket',
        accessKeyId: 'ACCESS_KEY',
        secretAccessKey: 'SECRET_KEY',
      },
    },
  },
  {
    id: '6',
    name: 'Social Media Data Pipeline',
    description: 'Collects and analyzes social media data',
    enabled: true,
    input: {
      id: 'input6',
      name: 'Twitter API Input',
      description: 'Fetches tweets from Twitter API',
      type: 'api',
      settings: {
        url: 'https://api.twitter.com/2/tweets/search/recent',
        method: 'GET',
        headers: {
          Authorization: 'Bearer YOUR_BEARER_TOKEN',
        },
        parameters: {
          query: '#hashtag',
          max_results: 100,
        },
      },
    },
    transform: {
      id: 'transform6',
      name: 'Sentiment Analysis Transform',
      description: 'Performs sentiment analysis on tweets',
      type: 'function',
      settings: {
        functionName: 'analyzeSentiment',
        parameters: {
          algorithm: 'NaiveBayes',
          languageModel: 'en',
        },
      },
    },
    output: {
      id: 'output6',
      name: 'MongoDB Output',
      description: 'Stores analyzed tweets in MongoDB',
      type: 'database',
      settings: {
        url: 'mongodb://localhost:27017',
        database: 'social_media',
        collection: 'analyzed_tweets',
      },
    },
  },
];

export default dummyPipelines;
