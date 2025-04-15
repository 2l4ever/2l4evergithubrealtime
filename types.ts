export interface Commit {
    id: string;
    repo_name: string;
    repo_full_name: string;
    branch: string;
    author: string;
    email: string;
    commit_message: string;
    commit_url: string;
    timestamp: string;
    files_modified: string[];
    compare_url: string;
    deployed_url: string;
  }