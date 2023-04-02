
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNAwesomeLibrary2Spec.h"

@interface AwesomeLibrary2 : NSObject <NativeAwesomeLibrary2Spec>
#else
#import <React/RCTBridgeModule.h>

@interface AwesomeLibrary2 : NSObject <RCTBridgeModule>
#endif

@end
