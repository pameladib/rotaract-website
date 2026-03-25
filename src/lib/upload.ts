import { supabase } from "@/lib/supabase"; // the connection we created in step 3

export async function uploadImage(file: File) { // receives a file from input
  const fileName = `${Date.now()}-${file.name}`; // generate unique file name to prevent name collisions

  const { error } = await supabase.storage // we only care about the error
    .from("images") 
    .upload(fileName, file);

  if (error) throw error; // if error is set, the rest of the code is not executed and the error is thrown to the nearest catch block -> must have the upload() call in a try-catch block

  const { data } = supabase.storage
    .from("images")
    .getPublicUrl(fileName); // constructs a public URL for the file

  return data.publicUrl;
}