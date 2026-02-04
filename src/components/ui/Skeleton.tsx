import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => (
  <div
    className={cn(
      "animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] rounded-md",
      className
    )}
  />
);

export const SkeletonText = ({ className }: SkeletonProps) => (
  <Skeleton className={cn("h-4 w-full", className)} />
);

export const SkeletonTitle = ({ className }: SkeletonProps) => (
  <Skeleton className={cn("h-8 w-3/4", className)} />
);

export const SkeletonCard = ({ className }: SkeletonProps) => (
  <div className={cn("space-y-4 py-10 md:py-12 border-b border-border", className)}>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-3 w-16" />
    </div>
    <SkeletonTitle />
    <div className="space-y-2">
      <SkeletonText />
      <SkeletonText className="w-5/6" />
    </div>
    <div className="flex flex-wrap gap-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-6 w-14 rounded-full" />
    </div>
  </div>
);

export const SkeletonExperienceItem = ({ className }: SkeletonProps) => (
  <div className={cn("py-10 md:py-12 border-b border-border", className)}>
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-5 w-1/3" />
      </div>
    </div>
  </div>
);

export const SkeletonBlogList = ({ count = 3 }: { count?: number }) => (
  <div className="border-t border-border">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);
