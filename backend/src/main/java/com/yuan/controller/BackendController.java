package com.yuan.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/api")
public class BackendController {

    private static final Logger LOG = LoggerFactory.getLogger(BackendController.class);

    public static final String HELLO_TEXT = "Hello from Spring Boot Backend!";
    public static final String Bye_TEXT = "Bye from Spring Boot Backend!";

    @RequestMapping(path = "/test")
    public @ResponseBody String sayTest() {
        return "test";
    }

    @RequestMapping(path = "/hello")
    public @ResponseBody String sayHello() {
        LOG.info("GET called on /hello resource");
        return HELLO_TEXT;
    }

    @RequestMapping(path = "/bye")
    public @ResponseBody String sayBye() {
        LOG.info("GET called on /bye resource");
        return Bye_TEXT;
    }

}
