package com.example;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

import javax.json.JsonObject;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
/**
 * Created by trieudh on 23/09/2016.
 */

@XmlRootElement
public class User {
    @XmlElement(name="name")
    private String name;

    @XmlElement(name="age")
    private int age;

    public User(){}

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }

    @Override
    public String toString() {
        try {
            return new JSONObject().put("name", this.name).put("age", this.age).toString();
        }
        catch (JSONException e) {
            return null;
        }
    }
}
