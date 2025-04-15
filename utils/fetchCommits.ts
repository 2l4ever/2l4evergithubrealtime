import { supabase } from '../lib/supabaseClient';
import { Commit } from '../types';

export const fetchCommits = async (): Promise<Commit[]> => {
  const { data, error } = await supabase
    .from('githubcommits')
    .select('*')
    .order('timestamp', { ascending: false });

  if (error) throw error;
  return data as Commit[];
};
