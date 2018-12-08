//
//  RNCitconPay.h
//  RNCitconPay
//
//  Created by cdecmac02 on 2018/10/13.
//  Copyright © 2018年 SunnyEver0. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

#import <React/RCTEventEmitter.h>

@interface RNEasyShare : NSObject <RCTBridgeModule>

+(void)setCitconPayToken;
+(BOOL)processOpenUrl:(UIApplication *)application openUrl:(NSURL *)url;

@end
