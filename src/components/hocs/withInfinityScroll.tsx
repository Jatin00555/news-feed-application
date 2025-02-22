import { useEffect, useRef, useCallback } from "react";
import { CircularProgress } from "@mui/material";
import {
  BorderBoxCenterColumnStack,
  FullWidthBoxStack,
} from "../coreComponents/styledComponents";

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
        threshold: 0.5,
        rootMargin: "100px",
      });
      observerInstance.current.observe(observerRef.current);
      return () => observerInstance.current?.disconnect();
    }, [handleObserver]);

    return (
      <FullWidthBoxStack sx={{ overflow: "auto" }}>
        <WrappedComponent {...(props as P)} />
        {props.hasMore && (
          <BorderBoxCenterColumnStack
            ref={observerRef}
            sx={{ minHeight: "100px", padding: "5px" }}
          >
            <CircularProgress
              sx={{ color: "text.primary", fontSize: "10px" }}
            />
          </BorderBoxCenterColumnStack>
        )}
      </FullWidthBoxStack>
    );
  };
};

export default withInfiniteScroll;
