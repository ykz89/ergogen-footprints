module.exports = {
    params: {
        designator: 'VIK_OUT',
        side: 'F',
        P1: { type: 'net', value: '3V3' },
        P2: { type: 'net', value: 'GND' },
        P3: { type: 'net', value: 'SDA' },
        P4: { type: 'net', value: 'SCL' },
        P5: { type: 'net', value: 'RGB_LED_OUT' },
        P6: { type: 'net', value: '5V' },
        P7: { type: 'net', value: 'GPIO_AD1' },
        P8: { type: 'net', value: 'MOSI' },
        P9: { type: 'net', value: 'GPIO_AD2' },
        P10: { type: 'net', value: 'SPI_CS' },
        P11: { type: 'net', value: 'MISO' },
        P12: { type: 'net', value: 'SCLK' },
    },
    body: p => {
        const standard = `
            (footprint "vik-keyboard-connector-horizontal"
            ${p.at /* parametric position */}
            (layer "F.Cu")
            (attr smd)
            ${'' /* footprint reference */}
            (fp_text reference "${p.ref}" (at 4.25 -3.5 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text value "vik-keyboard-connector-horizontal" (at 0.05 5.09 ${p.rot}) (layer "F.Fab")
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_text user "3v3" (at -5.9 -2.7 ${p.rot}) (layer "F.SilkS")
                (effects (font (size 0.75 0.75) (thickness 0.15)) (justify left bottom))
            )
            (fp_text user "VIK OUT" (at -3.05 -3.48 ${p.rot}) (layer "F.SilkS" knockout)
                (effects (font (size 1 1) (thickness 0.15)) (justify left bottom))
            )
            (fp_text user "C479750" (at 0 0.75 ${p.rot}) (layer "Eco2.User")
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_line (start -5.5 -2.2) (end -3.131 -2.2)
                (stroke (width 0.254) (type solid)) (layer "F.SilkS"))
            (fp_line (start -5.5 -0.539) (end -5.5 -2.2)
                (stroke (width 0.254) (type solid)) (layer "F.SilkS"))
            (fp_line (start -5.5 4.295) (end -5.5 1.912)
                (stroke (width 0.254) (type solid)) (layer "F.SilkS"))
            (fp_line (start 5.5 -2.2) (end 3.131 -2.2)
                (stroke (width 0.254) (type solid)) (layer "F.SilkS"))
            (fp_line (start 5.5 -0.539) (end 5.5 -2.2)
                (stroke (width 0.254) (type solid)) (layer "F.SilkS"))
            (fp_line (start 5.5 4.295) (end -5.5 4.295)
                (stroke (width 0.254) (type solid)) (layer "F.SilkS"))
            (fp_line (start 5.5 4.295) (end 5.5 1.912)
                (stroke (width 0.254) (type solid)) (layer "F.SilkS"))
            (fp_circle (center -3.429 -2.708) (end -3.302 -2.708)
                (stroke (width 0.254) (type solid)) (fill none) (layer "F.SilkS"))
            (fp_line (start -3.5 2) (end -3.5 4.5)
                (stroke (width 0.12) (type default)) (layer "Cmts.User"))
            (fp_line (start 3.5 2) (end 3.5 4.5)
                (stroke (width 0.12) (type default)) (layer "Cmts.User"))
            (pad "1" smd rect (at -2.75 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P1})
            (pad "2" smd rect (at -2.25 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P2})
            (pad "3" smd rect (at -1.75 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P3})
            (pad "4" smd rect (at -1.25 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P4})
            (pad "5" smd rect (at -0.75 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P5})
            (pad "6" smd rect (at -0.25 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P6})
            (pad "7" smd rect (at 0.25 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P7})
            (pad "8" smd rect (at 0.75 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P8})
            (pad "9" smd rect (at 1.25 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P9})
            (pad "10" smd rect (at 1.75 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P10})
            (pad "11" smd rect (at 2.25 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P11})
            (pad "12" smd rect (at 2.75 -2.038 ${p.rot}) (size 0.28 1.25) (layers "F.Cu" "F.Paste" "F.Mask") ${p.P12})
            (pad "13" smd rect (at 4.55 0.686 ${p.rot}) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask"))
            (pad "14" smd rect (at -4.55 0.686 ${p.rot}) (size 1.8 2) (layers "F.Cu" "F.Paste" "F.Mask"))
        `

        return `
        ${standard}
        )`;
    }
}