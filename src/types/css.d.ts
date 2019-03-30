import * as types from "typestyle/lib/types";

declare namespace CSS {}

declare module "typestyle/lib/types" {
  interface CSSProperties {
    "--padding"?: number;
    "--columns"?: number;
  }
}
