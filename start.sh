#!/bin/bash
cd "$(dirname "$0")"
echo "=========================================="
echo "    Spoustim taborovy system..."
echo "=========================================="

# Otevre prohlizec
xdg-open http://localhost:8000/index.html 2>/dev/null || sensible-browser http://localhost:8000/index.html 2>/dev/null

# Spusti Python server
python3 -m http.server 8000
