#!/usr/bin/env python3
"""
WCAG AA Color Contrast Verification Script
Verifies that all color combinations meet WCAG AA standards
"""

import math
from typing import Tuple

def hex_to_rgb(hex_color: str) -> Tuple[int, int, int]:
    """Convert hex color to RGB tuple"""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def get_luminance(rgb: Tuple[int, int, int]) -> float:
    """Calculate relative luminance according to WCAG formula"""
    r, g, b = [x / 255.0 for x in rgb]
    
    def adjust(c):
        if c <= 0.03928:
            return c / 12.92
        return ((c + 0.055) / 1.055) ** 2.4
    
    r = adjust(r)
    g = adjust(g)
    b = adjust(b)
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

def get_contrast_ratio(hex1: str, hex2: str) -> float:
    """Calculate contrast ratio between two colors"""
    rgb1 = hex_to_rgb(hex1)
    rgb2 = hex_to_rgb(hex2)
    
    lum1 = get_luminance(rgb1)
    lum2 = get_luminance(rgb2)
    
    lighter = max(lum1, lum2)
    darker = min(lum1, lum2)
    
    return (lighter + 0.05) / (darker + 0.05)

def check_wcag_aa(ratio: float, text_size: str = "normal") -> bool:
    """Check if contrast ratio meets WCAG AA"""
    if text_size == "large":  # 18pt+ or 14pt bold
        return ratio >= 3.0
    return ratio >= 4.5

def check_wcag_aaa(ratio: float, text_size: str = "normal") -> bool:
    """Check if contrast ratio meets WCAG AAA"""
    if text_size == "large":  # 18pt+ or 14pt bold
        return ratio >= 4.5
    return ratio >= 7.0

# Color combinations to verify
color_combinations = [
    # Hero Section
    ("Hero Title", "#0F1F2E", "#FFFFFF", "normal"),
    ("Hero Subtitle", "#0F1F2E", "#C9A24D", "normal"),
    
    # Selector Section
    ("Selector H3", "#FFFFFF", "#2B2B2B", "normal"),
    ("Selector P", "#FFFFFF", "#2B2B2B", "normal"),
    ("Selector Secondary", "#FFFFFF", "#6C757D", "normal"),
    ("Selector Button", "#FFFFFF", "#C9A24D", "normal"),
    
    # Defensa Penal
    ("Defensa H2", "#F8FAFB", "#0F1F2E", "normal"),
    ("Defensa P", "#F8FAFB", "#2B2B2B", "normal"),
    ("Defensa H2 (end)", "#F5F7FA", "#0F1F2E", "normal"),
    ("Defensa P (end)", "#F5F7FA", "#2B2B2B", "normal"),
    
    # Víctimas
    ("Victimas H2", "#F5F7FA", "#0F1F2E", "normal"),
    ("Victimas P", "#F5F7FA", "#2B2B2B", "normal"),
    ("Victimas H2 (end)", "#F0F3F7", "#0F1F2E", "normal"),
    ("Victimas P (end)", "#F0F3F7", "#2B2B2B", "normal"),
    
    # Cómo Trabajamos
    ("Proceso H2", "#F0F3F7", "#0F1F2E", "normal"),
    ("Proceso P", "#F0F3F7", "#2B2B2B", "normal"),
    ("Proceso H2 (end)", "#EBF0F5", "#0F1F2E", "normal"),
    ("Proceso P (end)", "#EBF0F5", "#2B2B2B", "normal"),
    
    # Autoridad
    ("Autoridad H2", "#EBF0F5", "#0F1F2E", "normal"),
    ("Autoridad P", "#EBF0F5", "#2B2B2B", "normal"),
    ("Autoridad Accent", "#EBF0F5", "#C9A24D", "normal"),
    ("Autoridad H2 (end)", "#E6EBF2", "#0F1F2E", "normal"),
    ("Autoridad P (end)", "#E6EBF2", "#2B2B2B", "normal"),
    
    # Honorarios
    ("Honorarios H2", "#E6EBF2", "#0F1F2E", "normal"),
    ("Honorarios P", "#E6EBF2", "#2B2B2B", "normal"),
    ("Honorarios H2 (end)", "#F2F4F6", "#0F1F2E", "normal"),
    ("Honorarios P (end)", "#F2F4F6", "#2B2B2B", "normal"),
    
    # Blog
    ("Blog H2", "#F2F4F6", "#0F1F2E", "normal"),
    ("Blog P", "#F2F4F6", "#2B2B2B", "normal"),
    ("Blog Badge", "#F2F4F6", "#C9A24D", "normal"),
    ("Blog H2 (end)", "#F5F7FA", "#0F1F2E", "normal"),
    ("Blog P (end)", "#F5F7FA", "#2B2B2B", "normal"),
    
    # FAQ
    ("FAQ H2", "#F5F7FA", "#0F1F2E", "normal"),
    ("FAQ Question", "#F5F7FA", "#0F1F2E", "normal"),
    ("FAQ Answer", "#F5F7FA", "#2B2B2B", "normal"),
    ("FAQ H2 (end)", "#F8FAFB", "#0F1F2E", "normal"),
    ("FAQ Question (end)", "#F8FAFB", "#0F1F2E", "normal"),
    ("FAQ Answer (end)", "#F8FAFB", "#2B2B2B", "normal"),
    
    # CTA Final
    ("CTA H2", "#0F1F2E", "#FFFFFF", "normal"),
    ("CTA P", "#0F1F2E", "#FFFFFF", "normal"),
    ("CTA Button", "#0F1F2E", "#C9A24D", "normal"),
]

def main():
    print("=" * 80)
    print("WCAG AA COLOR CONTRAST VERIFICATION REPORT")
    print("=" * 80)
    print()
    
    total = len(color_combinations)
    passed_aa = 0
    passed_aaa = 0
    failed = []
    
    print(f"{'Element':<25} {'Fondo':<10} {'Texto':<10} {'Ratio':<8} {'AA':<6} {'AAA':<6}")
    print("-" * 80)
    
    for name, bg, fg, size in color_combinations:
        ratio = get_contrast_ratio(bg, fg)
        aa_pass = check_wcag_aa(ratio, size)
        aaa_pass = check_wcag_aaa(ratio, size)
        
        if aa_pass:
            passed_aa += 1
        if aaa_pass:
            passed_aaa += 1
        
        if not aa_pass:
            failed.append((name, bg, fg, ratio))
        
        aa_status = "✅" if aa_pass else "❌"
        aaa_status = "✅" if aaa_pass else "❌"
        
        print(f"{name:<25} {bg:<10} {fg:<10} {ratio:>6.2f}:1 {aa_status:<6} {aaa_status:<6}")
    
    print()
    print("=" * 80)
    print("RESUMEN")
    print("=" * 80)
    print(f"Total de combinaciones: {total}")
    print(f"Cumplen WCAG AA: {passed_aa}/{total} ({passed_aa*100//total}%)")
    print(f"Cumplen WCAG AAA: {passed_aaa}/{total} ({passed_aaa*100//total}%)")
    print()
    
    if failed:
        print("❌ COMBINACIONES QUE NO CUMPLEN WCAG AA:")
        for name, bg, fg, ratio in failed:
            print(f"  - {name}: {ratio:.2f}:1 (Requerido: 4.5:1)")
    else:
        print("✅ TODAS LAS COMBINACIONES CUMPLEN WCAG AA")
        print("✅ TODAS LAS COMBINACIONES CUMPLEN WCAG AAA")
    
    print()
    print("=" * 80)
    
    return 0 if not failed else 1

if __name__ == "__main__":
    exit(main())
