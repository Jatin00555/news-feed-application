import { useEffect, useRef, useCallback } from "react";
import { CircularProgress } from "@mui/material";
import { FullWidthBoxStack } from "../coreComponents/styledComponents";

interface WithInfiniteScrollProps {
  loadMore: () => void;
  hasMore: boolean;
}

const withInfiniteScroll = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P & WithInfiniteScrollProps) => {
    const observerRef = useRef<HTMLDivElement | null>(null);
    const observerInstance = useRef<IntersectionObserver | null>(null);

    const handleObserver = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && props.hasMore) {
          props.loadMore();
        }
      },
      [props.hasMore, props.loadMore]
    );

    useEffect(() => {
      if (!observerRef.current) return;
      if (observerInstance.current) {
        observerInstance.current.disconnect();
      }
      observerInstance.current = new IntersectionObserver(handleObserver, {
        threshold: 1.0,
      });
      observerInstance.current.observe(observerRef.current);
      return () => observerInstance.current?.disconnect();
    }, [handleObserver]);

    return (
      <FullWidthBoxStack sx={{ overflow: "auto" }}>
        <WrappedComponent {...(props as P)} />
        {props.hasMore && (
          <div
            ref={observerRef}
            style={{ height: "10px", marginBottom: "20px" }}
          >
            <CircularProgress />
          </div>
        )}
      </FullWidthBoxStack>
    );
  };
};

export default withInfiniteScroll;
