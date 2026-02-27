import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rkawyddknwvukqngorlf.supabase.co";
const supabaseKey = "sb_publishable_rfdoETNhYuwSP0MtEdP_MQ__VGE4AIw";

export const supabase = createClient(supabaseUrl, supabaseKey);