function mockPerformance(){self.performance={deltaTime:0,next:function(e){this.deltaTime+=e},now:function(){return this.deltaTime}}}module("Clock"),test("clock with performance",function(){mockPerformance();var e=new THREE.Clock;e.start(),self.performance.next(123),ok(.123===e.getElapsedTime(),"okay"),self.performance.next(100),ok(.223===e.getElapsedTime(),"okay"),e.stop(),self.performance.next(1e3),ok(.223===e.getElapsedTime(),"don't update time if the clock was stopped")});