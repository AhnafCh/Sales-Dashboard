import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Loading() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* Header Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-[300px] mb-2" />
        <Skeleton className="h-4 w-[250px]" />
      </div>

      {/* Tabs Skeleton */}
      <Tabs defaultValue="filters" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="filters" disabled>
            Advanced Filters
          </TabsTrigger>
          <TabsTrigger value="exports" disabled>
            Export Center
          </TabsTrigger>
          <TabsTrigger value="reminders" disabled>
            Reminders
          </TabsTrigger>
          <TabsTrigger value="bulk" disabled>
            Bulk Operations
          </TabsTrigger>
        </TabsList>

        <div className="space-y-6">
          {/* Filter Controls Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[250px] mb-2" />
              <Skeleton className="h-4 w-[350px]" />
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-[80px] mb-2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-10 w-[120px]" />
                <Skeleton className="h-10 w-[100px]" />
              </div>

              <Skeleton className="h-4 w-[200px] mb-4" />
            </CardContent>
          </Card>

          {/* Filtered Results Skeleton */}
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-[180px]" />
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr>
                      {Array.from({ length: 7 }).map((_, i) => (
                        <th key={i} className="text-left p-3">
                          <Skeleton className="h-4 w-[80px]" />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-3">
                          <Skeleton className="h-5 w-[120px]" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-5 w-[80px]" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-5 w-[100px]" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-5 w-[80px]" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-5 w-[80px]" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-5 w-[80px]" />
                        </td>
                        <td className="p-3">
                          <Skeleton className="h-8 w-[60px]" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  )
}
