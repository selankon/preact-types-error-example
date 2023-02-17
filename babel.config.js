module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/typescript", { jsxPragma: "h" }],
        "@lingui/babel-preset-react",
        "preact",
    ],
    plugins: [
        "macros",
        [
            "@babel/plugin-transform-react-jsx",
            {
                pragma: "h",
                pragmaFrag: "Fragment",
            },
        ],
        [
            "babel-plugin-jsx-pragmatic",
            {
                module: "preact",
                import: "h",
                export: "h",
            },
        ],
    ],
};
