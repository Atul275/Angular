import { inject } from "@angular/core";
import { AuthService } from "./Services/auth.service";
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";

 export const canActivated= () => {
    const authService= inject(AuthService);
    const router= inject(Router);  
    if(authService.isAuthenticated()) {
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
 }

 export const resolved= () => {
    const courseService= inject(CourseService);
    return courseService.getAllcourses();
 }