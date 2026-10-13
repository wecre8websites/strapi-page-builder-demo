"use client";
// The editor receives its config from a Server Component, so it has to arrive as a client reference.
// PageBuilderConfig itself has no "use client" so public pages can also import it on the server (ServerRender).
export { default } from "./PageBuilderConfig";
