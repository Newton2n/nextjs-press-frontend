'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

export interface TableRow {
  id: string;
  [key: string]: any;
}

interface DataTableProps {
  title?: string;
  description?: string;
  columns: TableColumn[];
  rows: TableRow[];
  loading?: boolean;
}

export function DataTable({
  title,
  description,
  columns,
  rows,
  loading = false,
}: DataTableProps) {
  if (loading) {
    return (
      <Card>
        {title && (
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent className="py-8">
          <div className="text-center text-muted-foreground">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent className="min-w-0 px-3 sm:px-6">
        <div className="w-full overflow-x-auto rounded-md border border-border/60">
          <table className="min-w-[680px] w-full text-sm">
            <thead>
              <tr className="border-b">
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`text-left font-semibold text-muted-foreground py-3 px-4 ${
                      column.width ? column.width : ''
                    }`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="text-center py-8 text-muted-foreground"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="border-b hover:bg-muted/50 transition-colors">
                    {columns.map((column) => (
                      <td key={`${row.id}-${column.key}`} className="py-3 px-4">
                        {column.render
                          ? column.render(row[column.key], row)
                          : row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
