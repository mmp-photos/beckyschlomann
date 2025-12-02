declare module "*.css" {
  // We don't need to export anything specific, 
  // we just need to satisfy TypeScript that this import is valid.
  const content: any; 
  export default content;
}