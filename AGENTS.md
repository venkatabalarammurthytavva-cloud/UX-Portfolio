# Project Guidelines & Strict Rules

## Strict Image Handling Rule (MANDATORY)

- **Exact Supplied Assets Only**: Always use the exact image assets provided by the user.
- **No AI Image Generation or Reinterpretation**: Do NOT generate new images, recreate them with AI, reinterpret them, replace them, or create visually similar alternatives when an asset is supplied.
- **Pixel-for-Pixel Fidelity**: Treat each supplied image as a fixed, immutable asset (not a reference). Preserve original content, proportions, colors, details, labels, nodes, and visual structure.
- **Direct Asset Referencing**: Place the actual supplied image file directly into the corresponding `<img>` / React image component and reference its actual asset path.
- **Container Sizing**: If an image needs to fit a container, resize or crop the container around the image using CSS/Tailwind (e.g. `object-contain` / `w-full h-auto`), rather than altering or regenerating the image.
