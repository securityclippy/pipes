// app/system-logs/page.tsx

'use client';

import { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface LogEntry {
  id: number;
  timestamp: string;
  actor: string;
  action: string;
  result: string;
  message: string;
}

export default function SystemLogsPage() {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 1,
      timestamp: '2023-06-10T10:30:00Z',
      actor: 'Admin',
      action: 'Start Pipeline',
      result: 'Success',
      message: 'Pipeline "Data Ingestion Pipeline" started',
    },
    {
      id: 2,
      timestamp: '2023-06-10T10:32:00Z',
      actor: 'System',
      action: 'Load Data',
      result: 'Success',
      message: 'Input data loaded successfully',
    },
    {
      id: 3,
      timestamp: '2023-06-10T10:35:00Z',
      actor: 'System',
      action: 'Transform Data',
      result: 'Success',
      message: 'Data transformation completed',
    },
    {
      id: 4,
      timestamp: '2023-06-10T10:40:00Z',
      actor: 'System',
      action: 'Store Data',
      result: 'Success',
      message: 'Output data stored in the database',
    },
    {
      id: 5,
      timestamp: '2023-06-10T10:42:00Z',
      actor: 'Admin',
      action: 'Stop Pipeline',
      result: 'Success',
      message: 'Pipeline "Data Ingestion Pipeline" completed successfully',
    },
    // Add more log entries
  ]);

  const [sortColumn, setSortColumn] = useState<keyof LogEntry>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (column: keyof LogEntry) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedLogs = logs.sort((a, b) => {
    const columnA = a[sortColumn];
    const columnB = b[sortColumn];

    if (columnA < columnB) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (columnA > columnB) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">System Logs</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th
              className={`py-2 px-4 bg-green-600 text-white cursor-pointer ${
                sortColumn === 'timestamp' ? 'bg-green-700' : ''
              }`}
              onClick={() => handleSort('timestamp')}
            >
              <div className="flex items-center">
                Time
                {sortColumn === 'timestamp' && (
                  sortDirection === 'asc' ? (
                    <FaArrowUp className="ml-1" />
                  ) : (
                    <FaArrowDown className="ml-1" />
                  )
                )}
              </div>
            </th>
            <th
              className={`py-2 px-4 bg-green-600 text-white cursor-pointer ${
                sortColumn === 'actor' ? 'bg-green-700' : ''
              }`}
              onClick={() => handleSort('actor')}
            >
              <div className="flex items-center">
                Actor
                {sortColumn === 'actor' && (
                  sortDirection === 'asc' ? (
                    <FaArrowUp className="ml-1" />
                  ) : (
                    <FaArrowDown className="ml-1" />
                  )
                )}
              </div>
            </th>
            <th
              className={`py-2 px-4 bg-green-600 text-white cursor-pointer ${
                sortColumn === 'action' ? 'bg-green-700' : ''
              }`}
              onClick={() => handleSort('action')}
            >
              <div className="flex items-center">
                Action
                {sortColumn === 'action' && (
                  sortDirection === 'asc' ? (
                    <FaArrowUp className="ml-1" />
                  ) : (
                    <FaArrowDown className="ml-1" />
                  )
                )}
              </div>
            </th>
            <th
              className={`py-2 px-4 bg-green-600 text-white cursor-pointer ${
                sortColumn === 'result' ? 'bg-green-700' : ''
              }`}
              onClick={() => handleSort('result')}
            >
              <div className="flex items-center">
                Result
                {sortColumn === 'result' && (
                  sortDirection === 'asc' ? (
                    <FaArrowUp className="ml-1" />
                  ) : (
                    <FaArrowDown className="ml-1" />
                  )
                )}
              </div>
            </th>
            <th
              className={`py-2 px-4 bg-green-600 text-white cursor-pointer ${
                sortColumn === 'message' ? 'bg-green-700' : ''
              }`}
              onClick={() => handleSort('message')}
            >
              <div className="flex items-center">
                Message
                {sortColumn === 'message' && (
                  sortDirection === 'asc' ? (
                    <FaArrowUp className="ml-1" />
                  ) : (
                    <FaArrowDown className="ml-1" />
                  )
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedLogs.map((log) => (
            <tr key={log.id}>
              <td className="py-2 px-4 border-b">{log.timestamp}</td>
              <td className="py-2 px-4 border-b">{log.actor}</td>
              <td className="py-2 px-4 border-b">{log.action}</td>
              <td className="py-2 px-4 border-b">{log.result}</td>
              <td className="py-2 px-4 border-b">{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
