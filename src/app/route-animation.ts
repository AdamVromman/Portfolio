import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

export const slider = 
    trigger('routerAnimations',[
        transition('* => home', [
            query(':enter', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transform: 'translateY(-100%)',
                }), 
            ], {optional: true}),
            group([
                query(':leave', [
                    animate('1200ms',
                    style({
                        position: 'absolute',
                        left: 0,
                        width: '100%',
                        height: '100%', 
                        transform: 'translateY(100%)'
                    })
                    )
                ], {optional: true}),
                query(':enter', [
                    animate('1200ms',
                    style({
                        transform: 'translateY(0)'
                    })
                    )
                ], {optional: true}),
            ])
            
        ]),
        transition('home <=> *', [
            query(':enter', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transform: 'translateY(100%)',
                }), 
            ], {optional: true}),
                group([
                    query(':leave', [
                        animate('1200ms',
                        style({
                            position: 'absolute',
                            left: 0,
                            width: '100%',
                            height: '100%', 
                            transform: 'translateY(-100%)'
                        })
                        )
                    ], {optional: true}),
                    query(':enter', [
                        animate('1200ms',
                        style({
                            transform: 'translateY(0)'
                        })
                        )
                    ], {optional: true}),
                    
                ]),
                ])
    ]);


    export const photoRechts = 
    trigger('photoAnimationRechts', [
        state('onScreenRechts', style({ transform:'translateX(0%)'})),
        state('offScreenRechts', style({transform: 'translateX(100%)'})),
        transition('* <=> *', 
            animate('400ms')
        ),

        
    ]);

    export const photoLinks = 
    trigger('photoAnimationLinks', [
        state('onScreenLinks', style({ transform:'translateX(-100%)'})),
        state('offScreenLinks', style({transform: 'translateX(0%)'})),
        transition('* <=> *', 
            animate('400ms')
        ),

        
    ]);
    