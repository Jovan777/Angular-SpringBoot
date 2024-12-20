import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectionPositionPair
} from "./chunk-ZEGK6GOB.js";
import {
  AnimationDriver,
  AnimationEngine,
  AnimationRendererFactory,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-H5TUES7C.js";
import {
  BrowserModule,
  DomRendererFactory2
} from "./chunk-PHXBK7TF.js";
import {
  NzDestroyService
} from "./chunk-2EXZXG3T.js";
import {
  DOCUMENT
} from "./chunk-OGMOKVNG.js";
import {
  ANIMATION_MODULE_TYPE,
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  RendererFactory2,
  booleanAttribute,
  inject,
  setClassMetadata,
  takeUntil,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject
} from "./chunk-X6KQNGFA.js";

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static {
    this.ɵfac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InjectableAnimationEngine)(ɵɵinject(DOCUMENT), ɵɵinject(AnimationDriver), ɵɵinject(AnimationStyleNormalizer));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _InjectableAnimationEngine,
      factory: _InjectableAnimationEngine.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static {
    this.ɵfac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowserAnimationsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BrowserAnimationsModule,
      exports: [BrowserModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: BROWSER_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
var NoopAnimationsModule = class _NoopAnimationsModule {
  static {
    this.ɵfac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoopAnimationsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NoopAnimationsModule,
      exports: [BrowserModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-no-animation.mjs
var NzNoAnimationDirective = class _NzNoAnimationDirective {
  constructor() {
    this.animationType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this.nzNoAnimation = false;
  }
  static {
    this.ɵfac = function NzNoAnimationDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzNoAnimationDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzNoAnimationDirective,
      selectors: [["", "nzNoAnimation", ""]],
      hostVars: 2,
      hostBindings: function NzNoAnimationDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("nz-animate-disabled", ctx.nzNoAnimation || ctx.animationType === "NoopAnimations");
        }
      },
      inputs: {
        nzNoAnimation: [2, "nzNoAnimation", "nzNoAnimation", booleanAttribute]
      },
      exportAs: ["nzNoAnimation"],
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationDirective, [{
    type: Directive,
    args: [{
      selector: "[nzNoAnimation]",
      exportAs: "nzNoAnimation",
      standalone: true,
      host: {
        "[class.nz-animate-disabled]": `nzNoAnimation || animationType === 'NoopAnimations'`
      }
    }]
  }], null, {
    nzNoAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzNoAnimationModule = class _NzNoAnimationModule {
  static {
    this.ɵfac = function NzNoAnimationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzNoAnimationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzNoAnimationModule,
      imports: [NzNoAnimationDirective],
      exports: [NzNoAnimationDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationModule, [{
    type: NgModule,
    args: [{
      imports: [NzNoAnimationDirective],
      exports: [NzNoAnimationDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-overlay.mjs
var POSITION_MAP = {
  top: new ConnectionPositionPair({
    originX: "center",
    originY: "top"
  }, {
    overlayX: "center",
    overlayY: "bottom"
  }),
  topCenter: new ConnectionPositionPair({
    originX: "center",
    originY: "top"
  }, {
    overlayX: "center",
    overlayY: "bottom"
  }),
  topLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }),
  topRight: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  }),
  right: new ConnectionPositionPair({
    originX: "end",
    originY: "center"
  }, {
    overlayX: "start",
    overlayY: "center"
  }),
  rightTop: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "top"
  }),
  rightBottom: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }),
  bottom: new ConnectionPositionPair({
    originX: "center",
    originY: "bottom"
  }, {
    overlayX: "center",
    overlayY: "top"
  }),
  bottomCenter: new ConnectionPositionPair({
    originX: "center",
    originY: "bottom"
  }, {
    overlayX: "center",
    overlayY: "top"
  }),
  bottomLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "top"
  }),
  bottomRight: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "top"
  }),
  left: new ConnectionPositionPair({
    originX: "start",
    originY: "center"
  }, {
    overlayX: "end",
    overlayY: "center"
  }),
  leftTop: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "top"
  }),
  leftBottom: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  })
};
var DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
var DEFAULT_CASCADER_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.topRight, POSITION_MAP.topCenter, POSITION_MAP.bottomCenter];
var DEFAULT_MENTION_TOP_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "end",
  overlayY: "bottom"
})];
var DEFAULT_MENTION_BOTTOM_POSITIONS = [POSITION_MAP.bottomLeft, new ConnectionPositionPair({
  originX: "start",
  originY: "bottom"
}, {
  overlayX: "end",
  overlayY: "top"
})];
function getPlacementName(position) {
  for (const placement in POSITION_MAP) {
    if (position.connectionPair.originX === POSITION_MAP[placement].originX && position.connectionPair.originY === POSITION_MAP[placement].originY && position.connectionPair.overlayX === POSITION_MAP[placement].overlayX && position.connectionPair.overlayY === POSITION_MAP[placement].overlayY) {
      return placement;
    }
  }
  return void 0;
}
var DATE_PICKER_POSITION_MAP = {
  bottomLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "bottom"
  }, {
    overlayX: "start",
    overlayY: "top"
  }, void 0, 2),
  topLeft: new ConnectionPositionPair({
    originX: "start",
    originY: "top"
  }, {
    overlayX: "start",
    overlayY: "bottom"
  }, void 0, -2),
  bottomRight: new ConnectionPositionPair({
    originX: "end",
    originY: "bottom"
  }, {
    overlayX: "end",
    overlayY: "top"
  }, void 0, 2),
  topRight: new ConnectionPositionPair({
    originX: "end",
    originY: "top"
  }, {
    overlayX: "end",
    overlayY: "bottom"
  }, void 0, -2)
};
var DEFAULT_DATE_PICKER_POSITIONS = [DATE_PICKER_POSITION_MAP.bottomLeft, DATE_PICKER_POSITION_MAP.topLeft, DATE_PICKER_POSITION_MAP.bottomRight, DATE_PICKER_POSITION_MAP.topRight];
var NzConnectedOverlayDirective = class _NzConnectedOverlayDirective {
  constructor(cdkConnectedOverlay, nzDestroyService) {
    this.cdkConnectedOverlay = cdkConnectedOverlay;
    this.nzDestroyService = nzDestroyService;
    this.nzArrowPointAtCenter = false;
    this.cdkConnectedOverlay.backdropClass = "nz-overlay-transparent-backdrop";
    this.cdkConnectedOverlay.positionChange.pipe(takeUntil(this.nzDestroyService)).subscribe((position) => {
      if (this.nzArrowPointAtCenter) {
        this.updateArrowPosition(position);
      }
    });
  }
  updateArrowPosition(position) {
    const originRect = this.getOriginRect();
    const placement = getPlacementName(position);
    let offsetX = 0;
    let offsetY = 0;
    if (placement === "topLeft" || placement === "bottomLeft") {
      offsetX = originRect.width / 2 - 14;
    } else if (placement === "topRight" || placement === "bottomRight") {
      offsetX = -(originRect.width / 2 - 14);
    } else if (placement === "leftTop" || placement === "rightTop") {
      offsetY = originRect.height / 2 - 10;
    } else if (placement === "leftBottom" || placement === "rightBottom") {
      offsetY = -(originRect.height / 2 - 10);
    }
    if (this.cdkConnectedOverlay.offsetX !== offsetX || this.cdkConnectedOverlay.offsetY !== offsetY) {
      this.cdkConnectedOverlay.offsetY = offsetY;
      this.cdkConnectedOverlay.offsetX = offsetX;
      this.cdkConnectedOverlay.overlayRef.updatePosition();
    }
  }
  getFlexibleConnectedPositionStrategyOrigin() {
    if (this.cdkConnectedOverlay.origin instanceof CdkOverlayOrigin) {
      return this.cdkConnectedOverlay.origin.elementRef;
    } else {
      return this.cdkConnectedOverlay.origin;
    }
  }
  getOriginRect() {
    const origin = this.getFlexibleConnectedPositionStrategyOrigin();
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
  static {
    this.ɵfac = function NzConnectedOverlayDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzConnectedOverlayDirective)(ɵɵdirectiveInject(CdkConnectedOverlay), ɵɵdirectiveInject(NzDestroyService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NzConnectedOverlayDirective,
      selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]],
      inputs: {
        nzArrowPointAtCenter: [2, "nzArrowPointAtCenter", "nzArrowPointAtCenter", booleanAttribute]
      },
      exportAs: ["nzConnectedOverlay"],
      features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzConnectedOverlayDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkConnectedOverlay][nzConnectedOverlay]",
      exportAs: "nzConnectedOverlay",
      providers: [NzDestroyService]
    }]
  }], () => [{
    type: CdkConnectedOverlay
  }, {
    type: NzDestroyService
  }], {
    nzArrowPointAtCenter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzOverlayModule = class _NzOverlayModule {
  static {
    this.ɵfac = function NzOverlayModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NzOverlayModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NzOverlayModule,
      declarations: [NzConnectedOverlayDirective],
      exports: [NzConnectedOverlayDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOverlayModule, [{
    type: NgModule,
    args: [{
      declarations: [NzConnectedOverlayDirective],
      exports: [NzConnectedOverlayDirective]
    }]
  }], null, null);
})();

export {
  NzNoAnimationDirective,
  POSITION_MAP,
  DEFAULT_TOOLTIP_POSITIONS,
  getPlacementName,
  NzConnectedOverlayDirective,
  NzOverlayModule
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v18.2.11
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-KTP4VPXA.js.map
