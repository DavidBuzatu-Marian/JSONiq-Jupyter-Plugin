"use strict";(self.webpackChunkjsoniq_jupyterlab_extension=self.webpackChunkjsoniq_jupyterlab_extension||[]).push([[891],{8481:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.jsoniqExtractor=void 0;const o=n(8847);t.jsoniqExtractor=new o.RegExpForeignCodeExtractor({language:"jsoniq",pattern:"^%%(jsoniq)( .*?)?\n([^]*)",foreignCaptureGroups:[3],isStandalone:!0,fileExtension:"jq"})},2891:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(8307),r=n(8481),a={id:"davidbuzatu-marian/jsoniq-jupyter-plugin:jsoniq",requires:[o.ILSPCodeExtractorsManager],activate:(e,t)=>{t.register(r.jsoniqExtractor,"python")},autoStart:!0};t.default=a}}]);