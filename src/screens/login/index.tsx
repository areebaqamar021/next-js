"use client"
import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import Link from "next/link";
import { LoginInput } from "@src/apis";

type LoginScreenProps = {
  onSignIn: (v: LoginInput) => Promise<void>
}

const LoginScreen = ({ onSignIn }: LoginScreenProps) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: LoginInput) => {
    try {
      setLoading(true)
      await onSignIn(values)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-[#b88e2f] text-center mb-6">
          Welcome Back
        </h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label={<span className="text-gray-800 font-medium">Email</span>}
            name="username"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label={<span className="text-gray-800 font-medium">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item className="flex justify-between items-center">
            <Checkbox className="text-gray-800">Remember me</Checkbox>
            <Link href="/forgot-password" className="text-[#b88e2f] hover:underline">
              Forgot password?
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="w-full bg-[#b88e2f] border-none text-white font-semibold py-2"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginScreen;
