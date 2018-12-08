//
//  RNEasyShare.m
//  RNEasyShare
//
//  Created by cdecmac02 on 2018/10/13.
//  Copyright © 2018年 SunnyEver0. All rights reserved.
//

#import "RNEasyShare.h"

@implementation RNEasyShare


RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

//- (void)supportedEvents {
////    return
//}

RCT_EXPORT_METHOD(share) {
    NSLog(@"%@",@"123");
}

- (void)dealloc
{
//    [[NSNotificationCenter defaultCenter] removeObserver:self];
}



@end
