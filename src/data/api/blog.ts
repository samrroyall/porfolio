import { type BlogPost, type BlogPostInfo } from "../../models/blog";
import { mockFunc } from "../../utils";

export const getBlogData = (): Promise<BlogPostInfo[]> =>
  mockFunc([] as BlogPostInfo[]);

export const getBlogPostData = (_id: string): Promise<BlogPost | null> =>
  mockFunc(null as BlogPost | null);
