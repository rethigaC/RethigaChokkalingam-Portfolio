/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Portfolio from "./components/Portfolio";
import { TooltipProvider } from "./components/ui/tooltip";

export default function App() {
  return (
    <TooltipProvider>
      <Portfolio />
    </TooltipProvider>
  );
}
